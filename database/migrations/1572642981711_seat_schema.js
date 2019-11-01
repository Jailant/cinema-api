'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SeatSchema extends Schema {
  up () {
    this.create('seats', table => {
      table.increments()
      table.integer('booking_id').unsigned().references('bookings.id')
      table.integer('seat_row')
      table.integer('seat_number')
      table.enu('seat_state', ['AVAILABLE', 'BOOKED']).defaultTo('AVAILABLE')
    })
  }

  down () {
    this.drop('seats')
  }
}

module.exports = SeatSchema
