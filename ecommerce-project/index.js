'use strict'
const express = require('express')
const { join } = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const productsRoutes = require('./routes/products')
const productApiRoutes = require('./routes/api/products')

// Static files
app.use('/static', express.static(join(__dirname, 'public')))

// Body parse
app.use(express.json())
// Define the template engine
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'pug')

// Routes
app.use('/products', productsRoutes)
app.use('/api/products', productApiRoutes)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
