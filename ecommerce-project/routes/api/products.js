"use strict"
const express = require("express")
const router = express.Router()
const ProductsService = require("../../services/productsService")

const productService = new ProductsService()

router.get("/", async (req, res, next) => {
  try {
    const { tags } = req.query
    const products = await productService.getProducts({ tags })
    res.status(200).json({
      data: products,
    })
  } catch (e) {
    next(e)
  }
})

router.get("/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params
    const product = await productService.getProducts({ productId })
    res.status(200).json({
      data: product,
    })
  } catch (e) {
    next(e)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const { body: product } = req
    const productCreated = await productService.createProduct({ product })
    res.status(201).json({
      data: productCreated,
    })
  } catch (e) {
    next(e)
  }
})

router.put("/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params
    const { body: productData } = req.body

    const productUpdated = await productService.updateProduct({
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

router.delete("/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params
    const productDeleted = await productService.deleteProduct({ productId })
    res.status(200).json({
      data: productDeleted,
    })
  } catch (e) {
    next(e)
  }
})

module.exports = router
