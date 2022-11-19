const express = require("express");

// create an instance of an express app
const app = express();

// set port for express app to listen to
const port = 3000;
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

// a sample request
app.get("/", (req, res) => {
  res.send("Hello Express!");
});
