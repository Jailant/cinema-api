'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieShowingTimeSchema extends Schema {
  up () {
    this.create('movie_showing_times', table => {
      table.increments()
      table.integer('movie_showing_id').unsigned().references('movie_showings.id')
      table.string('hour_to_show', 20)
    })
  }

  down () {
    this.drop('movie_showing_times')
  }
}

module.exports = MovieShowingTimeSchema
