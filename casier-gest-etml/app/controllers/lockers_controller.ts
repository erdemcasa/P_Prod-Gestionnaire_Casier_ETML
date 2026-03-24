import Locker from '#models/locker'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'
import db from '@adonisjs/lucid/services/db'
import Request from '#models/request'

export default class LockersController {
  /**
   * Afficher la liste des casiers
   */
  async index({view  }: HttpContext) {

    // SELECT * FROM lockers
    const lockers = await Locker.all()

    // dd(lockers)

    return view.render('pages/lockers', { lockers })

  }

  async freeLockers({ view, auth }: HttpContext) {
    const student = auth.use('web').user

    const lockers = await Locker.query().orderBy('lockerNumber', 'asc')

    for (const locker of lockers) {
      const request = await Request.query().where('lockerId', locker.id).first()
      locker.isRequested = !!request
    }

    return view.render('pages/freeLockers', {
      freeLockers: lockers,
      student,
    })
  }
  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Afficher un seul casier
   */
  async show({view, params }: HttpContext) {

    const locker = await Locker.query().where('id', params.locker_id).firstOrFail()

    //dd(locker)

    return view.render('pages/lockers/show', { locker })


  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({  }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
