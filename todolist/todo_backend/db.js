const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://irtejaoctopidigital:Sw9SW8u0CrDVvA9A@cluster1.cr2ozx0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
let db;

async function connectDB() {
  if (db) return db;
  const client = new MongoClient(uri);
  await client.connect();
  db = client.db("SampleTodo");
  return db;
}

module.exports = connectDB;
