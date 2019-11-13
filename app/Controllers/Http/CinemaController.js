'use strict'

const Cinema = use('App/Models/Cinema')
const Genre = use('App/Models/Genre')
const moment = require('moment')

class CinemaController {
  async allCinemas ({ response }) {
    const cinemas = await Cinema.query().withCount('rooms as number_of_rooms').fetch()
    return response.json(cinemas)
  }

  async findCinema ({ response, params }) {
    const cinema = await Cinema.find(params.id)
    await cinema.loadMany({
      rooms: room => {
        room
          .select('id', 'cinema_id')
          .where('cinema_id', params.id)
          .with('movieShowings', movieShowing => {
            movieShowing.where('movie_show_date', moment(new Date()).format('YYYY-MM-DD'))
          })
      }
    })
    return response.json(cinema)
  }
}

module.exports = CinemaController
