'use strict'
const express = require('express')
const router = express.Router()
const ProductsService = require('../../services/productServiceInjection')

router.get('/', async (req, res, next) => {
  try {
    const products = await ProductsService.getProducts({ tags: ''})
    res.render('products', { products })
  } catch (e) {
    next(e)
  }
})

module.exports = router
