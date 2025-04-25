const { MongoClient } = require("mongodb");
const mongoclient = new MongoClient("mongodb://localhost:27017");

async function createConnection(collectionName) {
  await mongoclient.connect();
  const db = mongoclient.db("chatdudedb");
  const collection = db.collection(collectionName);
  return collection;
}

module.exports = createConnection;
