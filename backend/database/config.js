const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log("MongoDB database connection established successfully!");
  } catch (error) {
    throw new Error("Database initialization error");
  }
};

module.exports = dbConnection;
