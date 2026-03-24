/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

import LockersController from '#controllers/lockers_controller'
import LoginController from '#controllers/auth/login_controller'
import LogoutController from '#controllers/auth/logout_controller'


router.group(() => {
  router.get('/login', [LoginController, 'show']).as('login.show')
  router.post('/login', [LoginController, 'store']).as('login.store')

}).as('auth').use(middleware.guest())



router.group(() => {

  router.get('/', [LockersController, 'index']).as('home')

  router.post('/logout', [LogoutController, 'handle']).as('auth.logout')


}).use(middleware.auth())



/*
// Page Login
router.get('/login', async ({ view }) => {
  return view.render('auth/login')
})

router.post('/login', [AuthController, 'login'])
router.post('/logout', [AuthController, 'logout']).use(middleware.auth())

// Page d’atterrissage -> redirection
router.get('/', async ({ response }) => response.redirect('/casiers-libres'))

// Accès casiers libres
router.get('/casiers-libres', [LockersController, 'freeLockers'])
  .as('home')
  .use(middleware.auth())

// Casiers
//router.get('/casiers', [LockersController, 'index'])
//router.get('/casiers/:locker_id', [LockersController, 'show']).as('lockers.show')

// Élèves A LAISSER QUE POIUR LES ADMINS
router.get('/eleves', [StudentsController, 'index'])

// Demandes
router.get('/demandes', [RequestsController, 'index'])

// Route de demande de casier par le student connecté
router.get('/casiers/:locker_id/request', [RequestsController, 'store'])
  .as('request.store')
  .use(middleware.auth())
*/
