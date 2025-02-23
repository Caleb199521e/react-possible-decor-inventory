const { MongoClient } = require('mongodb');
require('dotenv').config();

const connectDB = async () => {
  if (!process.env.ATLAS_URI) {
    throw new Error('ATLAS_URI is not defined in environment variables');
  }

  const client = new MongoClient(process.env.ATLAS_URI);

  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("possibledecorinventory");
    const collections = await db.listCollections().toArray();

    if (collections.length === 0) {
      console.log("No collections found in the database.");
    } else {
      console.log("Collections:");
      collections.forEach(collection => console.log(collection.name));
    }

    return client;

  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

module.exports = connectDB;