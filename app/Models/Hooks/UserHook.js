'use strict'

// eslint-disable-next-line no-multi-assign
const UserHook = exports = module.exports = {}
const Hash = use('Hash')
const Customer = use('App/Models/Customer')

/**
 * Hash using password as a hook
 *
 * @method
 *
 * @param {Object} userInstance
 *
 * @returns {void}
 */
UserHook.hashPassword = async userInstance => {
  if (userInstance.dirty.password) {
    userInstance.password = await Hash.make(userInstance.password)
  }
}

UserHook.setCustomer = async userInstance => {
  const customer = new Customer()
  userInstance.customer().save(customer)
}
