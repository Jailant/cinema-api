'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Booking extends Model {
  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }

  seats () {
    return this.hasMany('App/Models/Seat')
  }

  movieShowingTime () {
    return this.belongsTo('App/Models/MovieShowingTime')
  }
}

module.exports = Booking
