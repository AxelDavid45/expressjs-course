'use strict'
require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV !== 'production',
  db: {
    user: process.env.MONGOATLAS_USER,
    password: process.env.MONGOATLAS_PASSWORD,
    host: process.env.MONGOATLAS_HOST,
    name: process.env.MONGOATLAS_NAME,
  },
}

module.exports = config
