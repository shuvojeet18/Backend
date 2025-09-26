// This is the entry point for the application
import express from "express";

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectDB from "./db/connectDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
