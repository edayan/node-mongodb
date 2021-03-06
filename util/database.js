const mongodb =  require('mongodb');
const MongoClient  = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('', { useUnifiedTopology: true})
  .then(client => {
    console.log('connected');
    _db = client.db();
    callback();
  })
  .catch(error => {
    console.error(error);
    throw error
  });
}

const getDb  = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;