import factory from '@adonisjs/lucid/factories'
import Student from '#models/student'
import hash from '@adonisjs/core/services/hash'

export const StudentFactory = factory
  .define(Student, async ({ faker }) => {
    //const hashedPassword = await hash.make('ETML$1234')

    return {
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      eduvaudId: `u${faker.string.numeric(3)}etml`,
      isAdmin: false,
      password: 'ETML$1234',
    }
  })

  .state('admin', (row) => {
    row.isAdmin = true
  })
  .build()
