const { MongoClient } = require("mongodb");
const mongoclient = new MongoClient("mongodb://localhost:27017");

async function createConnection() {
  await mongoclient.connect();
  const db = mongoclient.db("chatdudedb");
  const collection = db.collection("users");
  return collection;
}

module.exports = createConnection;
