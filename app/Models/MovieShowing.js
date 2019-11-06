'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MovieShowing extends Model {
  movieShowingTimes () {
    return this.hasMany('App/Models/MovieShowingTime')
  }

  movie () {
    return this.belongsTo('App/Models/Movie')
  }

  room () {
    return this.belongsTo('App/Models/Room')
  }

  cinema () {
    return this.belongsTo('App/Models/Cinema')
  }
}

module.exports = MovieShowing
