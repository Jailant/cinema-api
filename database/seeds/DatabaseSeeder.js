'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabaseSeeder {
  async run () {
    const customersArray = await Factory
      .model('App/Models/Customer')
      .createMany(5)

    const cinemasArray = await Factory
      .model('App/Models/Cinema')
      .createMany(10)

    const genreAction = await Factory
      .model('App/Models/Genre')
      .create({ genre_name: 'Action' })

    const genreComedy = await Factory
      .model('App/Models/Genre')
      .create({ genre_name: 'Comedy' })

    // eslint-disable-next-line no-restricted-syntax
    for (const cinema of cinemasArray) {
      for (let i = 1; i <= 5; i++) {
        const room = await Factory
          .model('App/Models/Room')
          .create({ cinema_id: cinema.id })

        const movie = await Factory
          .model('App/Models/Movie')
          .create()

        await movie.genres().attach([genreAction.id, genreComedy.id])

        const movieShowing = await Factory
          .model('App/Models/MovieShowing')
          .create({
            room_id: room.id,
            movie_id: movie.id
          })

        console.log(movieShowing.id)

        const movieShowingTime = await Factory
          .model('App/Models/MovieShowingTime')
          .create({
            movie_showing_id: movieShowing.id
          })

        // eslint-disable-next-line no-restricted-syntax
        for (const customer of customersArray) {
          const booking = await Factory
            .model('App/Models/Booking')
            .create({
              customer_id: customer.id,
              movie_showing_time_id: movieShowingTime.id
            })

          await Factory
            .model('App/Models/Seat')
            .create({
              booking_id: booking.id
            })
        }
      }
    }
  }
}

module.exports = DatabaseSeeder
