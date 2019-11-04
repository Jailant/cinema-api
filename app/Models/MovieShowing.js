'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MovieShowing extends Model {
  movieShowingTimes () {
    return this.hasMany('App/Model/MovieShowingTime')
  }

  movie () {
    return this.belongsTo('App/Model/Movie')
  }

  room () {
    return this.belongsTo('App/Model/Room')
  }

  cinema () {
    return this.belongsTo('App/Model/Cinema')
  }
}

module.exports = MovieShowing
