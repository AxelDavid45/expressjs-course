'use strict'
const MongoLib = require('../../lib/mongo')
const chalk = require('chalk')
const bcrypt = require('bcrypt')
const { auth: { adminEmail, adminPassword, adminUsername } } = require('../../config');

(async function seedAdmin () {
  try {
    const mongo = new MongoLib()
    const condition = await hasAdminUser(mongo)
    if (condition) {
      console.log(chalk.yellow('Admin user already exists'))
      return process.exit(0)
    }

    const adminUserId = await createAdminUser(mongo)

    if (adminUserId) {
      console.log(chalk.green(`Admin user created with _id: ${adminUserId}`))
      return process.exit(0)
    }

  } catch (e) {
    console.error(chalk.red(e.message))
    console.error(chalk.red(e.stack))
    process.exit(1)
  }
})()

/**
 *
 * @param {MongoLib} db
 * @returns {Promise<boolean|any>}
 */
async function hasAdminUser (db) {
  const adminUser = await db.getAll('users', {
    username: adminUsername
  })
  if (adminUser) {
    return adminUser
  }
  return false
}

/**
 *
 * @param {MongoLib} dbInstance
 * @returns {Promise<boolean|*>}
 */
async function createAdminUser (dbInstance) {
  const hashedPassword = await bcrypt.hash(adminPassword, 10)
  const userId = await dbInstance.create('users', buildAdminUser(hashedPassword))
  if (userId) {
    return userId
  }
  return false
}

async function buildAdminUser (password) {
  return {
    password,
    username: adminUsername,
    email: adminEmail
  }
}
