import Student from '#models/student'
import { loginValidatior } from '#validators/auth'
import { HttpContext } from '@adonisjs/core/http'
import { errors } from '@adonisjs/auth'

export default class LoginController {

  async show({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  async store({ request, response, auth, session }: HttpContext) {
    const { eduvaudId, password } = await request.validateUsing(loginValidatior)

    try {

      const student = await Student.verifyCredentials(eduvaudId, password)
      await auth.use('web').login(student)

      session.flash({ success: 'Connecté avec succès !' })

      return response.redirect().toRoute('home')

    } catch (error) {
      session.flash({ error: 'Identifiants ou mot de passe incorrects.' })

      return response.redirect().back()
    }
  }
}
