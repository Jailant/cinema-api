'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MovieShowingTime extends Model {
  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }

  movieShowing () {
    return this.belongsTo('App/Model/MovieShowing')
  }

  bookings () {
    return this.hasMany('App/Model/Booking')
  }
}

module.exports = MovieShowingTime
