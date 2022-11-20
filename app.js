const express = require("express");

// create an instance of an express app
const app = express();

// register view egine
app.set("view engine", "ejs");

// set port for express app to listen to
const port = 3000;
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

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
