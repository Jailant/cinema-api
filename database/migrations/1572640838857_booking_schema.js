'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookingSchema extends Schema {
  up () {
    this.create('bookings', table => {
      table.increments()
      table.integer('customer_id').unsigned().references('customers.id')
      table.integer('movie_showing_times_id').unsigned().references('movie_showing_times.id')
      table.datetime('booking_made_date')
      table.integer('booking_seat_count')
    })
  }

  down () {
    this.drop('bookings')
  }
}

module.exports = BookingSchema
