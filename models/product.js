const mongodb = require('mongodb')
const { getDb } = require('../util/database');
class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db.collection('products')
      .insertOne(this)
      .then(result => {
        console.log('product saved')
      })
      .catch(err => {
        console.error(err)
      });
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('products')
      .find().toArray()
      .then(result => {
        return result;
      })
      .catch(err => {
        console.error(err)
      });
  }

  static findByid(prodId) {
    const db = getDb();
    return db.collection('products')
      .find({ _id: new mongodb.ObjectId(prodId) }).next()
      .then(result => {
        return result;
      })
      .catch(err => {
        console.error(err)
      })
  }
}

module.exports = Product;
