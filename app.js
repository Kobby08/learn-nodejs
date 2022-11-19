const express = require("express");

// create an instance of an express app
const app = express();

// set port for express app to listen to
const port = 3000;
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

// a sample requests
app.get("/", (req, res) => {
  //   res.send("Hello Express!");
  res.sendFile("views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //   res.send("Hello Express!");
  res.sendFile("views/about.html", { root: __dirname });
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile("views/404.html", { root: __dirname });
});
