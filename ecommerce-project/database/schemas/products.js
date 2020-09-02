'use strict'
const Joi = require('joi')

const productIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/)
// Validates each item in the tags array
const productTagSchema = Joi.array().items(Joi.string().max(10))

const createProductSchema = Joi.object({
  name: Joi.string().max(50).required(),
  price: Joi.number().min(1).max(1000000),
  image: Joi.string().required(),
  tags: productTagSchema,
})

const updateProductSchema = Joi.object({
  name: Joi.string().max(50),
  price: Joi.number().min(1).max(1000000),
  image: Joi.string(),
  tags: productTagSchema,
})

module.exports = {
  productIdSchema,
  productTagSchema,
  createProductSchema,
  updateProductSchema,
}
