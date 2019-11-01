'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookingSchema extends Schema {
  up () {
    this.create('bookings', table => {
      table.increments()
      table.integer('customer_id').unsigned().references('customers.id').comment('What movie will they see')
      table.integer('movie_showing_times_id').unsigned().references('movie_showing_times.id').comment('When it has been done')
      table.datetime('booking_made_date')
      table.integer('booking_seat_count').comment('Number of seats booked')
    })
  }

  down () {
    this.drop('bookings')
  }
}

module.exports = BookingSchema
