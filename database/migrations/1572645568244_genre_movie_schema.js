'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GenreMovieSchema extends Schema {
  up () {
    this.create('genre_movie', table => {
      table.increments()
      table.integer('movie_id').unsigned().references('movies.id')
      table.integer('genre_id').unsigned().references('genres.id')
    })
  }

  down () {
    this.drop('genre_movie')
  }
}

module.exports = GenreMovieSchema
