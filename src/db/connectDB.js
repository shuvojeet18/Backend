import mongoose from "mongoose";
import DB_NAME from "../constants.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error while connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
