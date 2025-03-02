// server.js
//import { createServer } from "node:http";
const { createServer } = require("http");
const morgan = require("morgan");

//log all requests to the console
const logger = morgan("combined");

const server = createServer((req, res) => {
  //log all requests to the console
  logger(req, res, () => {});
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello NodeJS!\n");
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `node server.js`
