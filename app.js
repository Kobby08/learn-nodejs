const express = require("express");
const morgan = require("morgan");

// create an instance of an express app
const app = express();

// register view egine
app.set("view engine", "ejs");

// set port for express app to listen to
const port = 3000;
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

// middlewares and stattic files
app.use(morgan("dev"));
app.use(express.static("public"));

// requests handlers
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //   res.send("Hello Express!");
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "Create Blog" });
});

// middlewares are functions that run in between a req and a res.
app.use((req, res, next) => {
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});
