import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoUrl = process.env.MONGODB;

export const initializeToDatabase = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to database");
  } catch (err) {
    console.error("Error in connect:", err);
  }
};
