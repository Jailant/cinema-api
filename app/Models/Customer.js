'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {
  bookings () {
    return this.hasMany('App/Models/Booking')
  }
}

module.exports = Customer
