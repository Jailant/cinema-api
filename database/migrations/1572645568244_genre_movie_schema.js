'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GenreMovieSchema extends Schema {
  up () {
    this.create('genre_movies', table => {
      table.integer('movie_id').unsigned().references('movies.id')
      table.integer('genres_id').unsigned().references('genres.id')
    })
  }

  down () {
    this.drop('genre_movies')
  }
}

module.exports = GenreMovieSchema
