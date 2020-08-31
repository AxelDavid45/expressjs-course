'use strict'
const productsMock = require('../utils/mocks/products')

class ProductsService {
  constructor () {}

  async getProducts ({ tags }) {
    return productsMock.all
  }

  async getProduct ({ productId }) {
    return productsMock.filterById(productId)
  }

  async createProduct ({ productData }) {
    return productsMock.all[0]
  }

  async updateProduct ({ productId, productData }) {
    return productsMock.all[0]
  }

  async deleteProduct (productId) {
    return productsMock.filterById(productId)
  }
}

module.exports = ProductsService
