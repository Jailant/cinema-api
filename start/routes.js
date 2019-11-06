'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('login', 'AuthController.login')
  Route.post('register', 'AuthController.register')
  Route.put('profile', 'AuthController.profile').middleware(['auth:jwt'])

  Route.get('cinema/:id', 'CinemaController.findCinema')
  Route.get('cinemas', 'CinemaController.allCinemas')

  Route.get('movies/:cinemaId/byCinema', 'MovieController.byCinema')
  Route.get('movies/:movieId/byMovie', 'MovieController.byMovie')
  Route.get('genres', 'MovieController.allGenres')

  Route.post('booking', 'BookingController.save').middleware(['auth:jwt'])
  Route.post('booking/last', 'BookingController.last').middleware(['auth:jwt'])
  Route.post('booking/all', 'BookingController.all').middleware(['auth:jwt'])
}).prefix('api/v1')
