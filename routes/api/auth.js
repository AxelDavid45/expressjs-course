'use strict'
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const passport = require('passport')
const boom = require('@hapi/boom')
const {
  auth: { jwtSecret },
} = require('../../config')
// basic strategy
require('../../auth/strategies/basic')

router.post('/token', async function (req, res, next) {
  passport.authenticate('basic', { session: false }, function (err, user) {
    try {
      if (err || !user) {
        return next(boom.unauthorized())
      }
      req.login(user, { session: false }, async function (err) {
        if (err) {
          return next(err)
        }
        const payload = { sub: user.username, email: user.email }
        const token = jwt.sign(payload, jwtSecret, {
          expiresIn: '15m',
        })
        return res.status(200).json({ access_token: token })
      })
    } catch (err) {
      next(err)
    }
  })(req, res,next)
})

module.exports = router
