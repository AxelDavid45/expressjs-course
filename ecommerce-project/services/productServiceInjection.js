'use strict'
/**
 * The duty of this file is only inject the dependencies that ProductService requires
 *
 */
const ProductsService = require('./productsService')
const MongoLib = require('../lib/mongo')
const store = new MongoLib()

module.exports = new ProductsService(store)
