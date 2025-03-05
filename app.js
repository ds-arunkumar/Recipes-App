// Importing express
const express = require("express");

// create an express app
const app = express();

// import the logger middleware
const logger = require("./middlewares/logger");

// use the logger middleware
app.use(logger);

// request handler
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.post("/", (req, res) => {
  res.json({ message: "Hello Post!" });
});
app.put("/", (req, res) => {
  res.json({ message: "Hello Put!" });
});
app.delete("/", (req, res) => {
  res.json({ message: "Hello Delete!" });
});

// export the app
module.exports = app;
