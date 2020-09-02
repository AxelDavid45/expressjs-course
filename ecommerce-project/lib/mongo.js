'use strict'
const { MongoClient, ObjectId } = require('mongodb')
const { db } = require('../config')
const MONGO_URI = `mongodb+srv://${db.user}:${db.password}@${db.host}/${db.name}?retryWrites=true&w=majority`

class MongoLib {
  constructor() {
    this.connection = null
    this.client = new MongoClient(MONGO_URI, { useUnifiedTopology: true })
  }

  async connect() {
    if (!this.connection) {
      await this.client.connect()
      console.log('Connected to db')
      this.connection = await this.client.db(db.name)
    }
    return this.connection
  }

  async getAll(collection, query) {
    await this.connect()
    return this.connection.collection(collection).find(query).toArray()
  }

  async get(collection, id) {
    await this.connect()
    return this.connection.collection(collection).findOne({ _id: Object(id) })
  }

  async create(collection, data) {
    await this.connect()
    return this.connection.collection(collection).insertOne(data).insertedId
  }

  async update(collection, id, data) {
    await this.connect()
    return this.connection
      .collection(collection)
      .updateOne({ _id: ObjectId(id) }, { $set: data })
  }

  async delete(collection, id) {
    await this.connect()
    await this.connection.collection(collection).deleteOne({ _id: ObjectId(id) })
    return id
  }
}

module.exports = MongoLib
