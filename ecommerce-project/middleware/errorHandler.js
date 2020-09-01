'use strict'
const { dev } = require('../config')

function errorHandler(err, req, res, next) {
  const response = { error: err.message }
  if (dev) {
    response.stack = err.stack
    console.error('[middleware error]', err.message)
    console.error('[middleware error] stack', err.stack)
  }
  res.status(err.status || 500)
  res.send(response)
}

module.exports = errorHandler
