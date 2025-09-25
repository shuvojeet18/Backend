// This is the entry point for the application
const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.get("/health", (req, res) => {
   res.status(200).send("OK");
});

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
