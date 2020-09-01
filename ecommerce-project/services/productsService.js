'use strict'

class ProductsService {
  constructor(store) {
    this.collection = 'products'
    this.store = store
  }

  async getProducts({ tags }) {
    const query = tags && { tags: { $in: tags } }
    return this.store.getAll(this.collection, query)
  }

  async getProduct({ productId }) {
    return await this.store.get(this.collection, productId)
  }

  async createProduct({ productData }) {
    return await this.store.create(this.collection, productData)
  }

  async updateProduct({ productId, productData }) {
    return await this.store.update(this.collection, productId, productData)
  }

  async deleteProduct({ productId }) {
    return this.store.delete(this.collection, productId)
  }
}

module.exports = ProductsService
