'use strict'
const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const MongoLib = require('../../lib/mongo')

passport.use(
  new BasicStrategy(async function (username, password, cb) {
    try {
      const mongoDB = new MongoLib()
      const [user] = await mongoDB.getAll('users', { username })
      console.log(user)
      if (!user) {
        return cb(boom.unauthorized(), false)
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return cb(boom.unauthorized(), false)
      }
      return cb(null, user)
    } catch (e) {
      return cb(e)
    }
  })
)
