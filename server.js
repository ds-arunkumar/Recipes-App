// Importing express
const express = require("express");

// create an express app
const app = express();

// a middleware function to log all requests
const logger = (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Method: ${req.method}`);
  console.log(`Request Body: ${req.body}`);
  console.log(`_________________________`);

  // call the next middleware function in the stack or
  // pass the request to the next middleware function
  next();
};

// use the logger middleware
app.use(logger);

// request handler
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
// listen for requests
app.listen(3001, "localhost", () => {
  console.log("Server is listening on port 3001");
});
