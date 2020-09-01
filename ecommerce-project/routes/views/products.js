'use strict'
const express = require('express')
const router = express.Router()
const ProductsService = require('../../services/productsService')

const productsService = new ProductsService()

router.get('/', async (req, res, next) => {
  try {
    const products = await productsService.getProducts({})
    res.render('products', { products })
  } catch (e) {
    next(e)
  }
})

module.exports = router
