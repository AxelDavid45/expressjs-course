'use strict'
const { MongoClient, ObjectId } = require('mongodb')
const { db } = require('../config')
const MONGO_URI = `mongodb+srv://${db.user}:${db.password}@${db.host}/${db.name}?retryWrites=true&w=majority`

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }

  async connect() {
    await this.client.connect()
    console.log('Connected to db')
    return await this.client.db(db.name)
  }

  async getAll(collection, query) {
    const db = await this.connect()
    return db.collection(collection).find(query).toArray()
  }

  async get(collection, id) {
    const db = await this.connect()
    return db.collection(collection).findOne({ _id: Object(id) })
  }

  async create(collection, data) {
    const db = await this.connect()
    return db.collection(collection).insertOne(data).insertedId
  }

  async update(collection, id, data) {
    const db = await this.connect()
    return db
      .collection(collection)
      .updateOne({ _id: ObjectId(id) }, { $set: data })
  }

  async delete(collection, id) {
    const db = await this.connect()
    await db.collection(collection).deleteOne({ _id: ObjectId(id) })
    return id
  }
}

module.exports = MongoLib
