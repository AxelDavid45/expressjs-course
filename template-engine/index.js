'use strict'
const express = require('express')
const app = express()
const expressJsx = require('./express-jsx')
// Define the extension of views
app.engine('jsx', expressJsx)
// Define the folder for views
app.set('views', './views')
// Defines the view engine we're going to use
app.set('view engine', 'jsx')

