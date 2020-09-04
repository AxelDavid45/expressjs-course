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
  auth: {
    adminUsername: process.env.AUTH_ADMIN_USERNAME,
    adminPassword: process.env.AUTH_ADMIN_PASSWORD,
    adminEmail: process.env.AUTH_ADMIN_EMAIL,
    jwtSecret: process.env.AUTH_JWT_SECRET
  }
}

module.exports = config
