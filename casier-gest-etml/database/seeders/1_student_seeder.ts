import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { StudentFactory } from '#database/factories/student_factory'
import hash from '@adonisjs/core/services/hash'

export default class StudentSeeder extends BaseSeeder {
  async run() {
    await StudentFactory.createMany(30)
  }
}
