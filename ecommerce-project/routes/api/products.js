'use strict'
const express = require('express')
const router = express.Router()
const ProductsService = require('../../services/productServiceInjection')
const {
  productIdSchema,
  productTagSchema,
  createProductSchema,
  updateProductSchema,
} = require('../../database/schemas/products')

router.get('/', async (req, res, next) => {
  try {
    const { tags } = req.query
    console.log('tags', req.query)
    const products = await ProductsService.getProducts({ tags })
    res.status(200).json({
      data: products,
    })
  } catch (e) {
    next(e)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params
    const product = await ProductsService.getProducts({ productId })
    res.status(200).json({
      data: product,
    })
  } catch (e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { body } = req
    const productCreated = await ProductsService.createProduct({ productData: body })
    res.status(201).json({
      data: productCreated,
    })
  } catch (e) {
    next(e)
  }
})

router.put('/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params
    const { body: productData } = req.body

    const productUpdated = await ProductsService.updateProduct({
      productId,
      productData,
    })

    res.status(200).json({
      data: productUpdated,
    })
  } catch (e) {
    next(e)
  }
})

router.delete('/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params
    const productDeleted = await ProductsService.deleteProduct({ productId })
    res.status(200).json({
      data: productDeleted,
    })
  } catch (e) {
    next(e)
  }
})

module.exports = router
