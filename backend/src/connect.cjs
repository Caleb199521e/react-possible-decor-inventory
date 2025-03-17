const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  if (!process.env.ATLAS_URI) {
    throw new Error('ATLAS_URI is not defined in environment variables');
  }

  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connected to MongoDB with Mongoose!");
    return mongoose.connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

module.exports = connectDB;