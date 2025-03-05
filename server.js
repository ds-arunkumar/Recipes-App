// import the app
const app = require("./app");

// listen for requests
app.listen(3001, "localhost", () => {
  console.log("Server is listening on port 3001");
});
