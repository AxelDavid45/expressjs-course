"use strict"
const express = require("express")
const router = express.Router()
const mockProducts = require('../utils/mocks/products')

router.get("/", (req, res, next) => {
  res.render("products", { products: mockProducts.all })
})

module.exports = router
