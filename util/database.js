const mongodb =  require('mongodb');
const MongoClient  = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('')
  .then(client => {
    console.log('connected');
    callback(client)
  })
  .catch(error => {
    console.error(error)
  });
}

module.exports = mongoConnect;