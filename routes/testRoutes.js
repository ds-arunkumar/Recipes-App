const express = require("express");

const testRouter = express.Router();

// request handler
testRouter.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
testRouter.post("/", (req, res) => {
  res.json({ message: "Hello Post!" });
});
testRouter.put("/", (req, res) => {
  res.json({ message: "Hello Put!" });
});
testRouter.delete("/", (req, res) => {
  res.json({ message: "Hello Delete!" });
});

// export the router
module.exports = testRouter;
