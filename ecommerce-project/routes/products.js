"use strict"
const express = require("express")
const router = express.Router()
const mockProducts = [
  {
    name: "Red Shoes",
    price: 200,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  {
    name: "Microwave",
    price: 500,
    image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
  },
]

router.get("/", (req, res, next) => {
  res.render("products", { products: mockProducts })
})

module.exports = router
