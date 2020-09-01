'use strict'
const express = require('express')
const { join } = require('path')
const PORT = process.env.PORT || 3000
const productsRoutes = require('./routes/views/products')
const productApiRoutes = require('./routes/api/products')
const errorHandlingMiddleware = require('./middleware/errorHandler')

const app = express()

// Static files
app.use('/static', express.static(join(__dirname, 'public')))

// Global middlewares
app.use(express.json())

// Define the template engine
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'pug')

// Routes
app.use('/products', productsRoutes)
app.use('/api/products', productApiRoutes)

// error middleware
app.use(errorHandlingMiddleware)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// TODO implement event uncaughtException
// TODO implement event unhandledRejection
