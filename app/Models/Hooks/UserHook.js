'use strict'

// eslint-disable-next-line no-multi-assign
const UserHook = exports = module.exports = {}
const Hash = use('Hash')

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
