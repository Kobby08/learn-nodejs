const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// create an instance of an express app
const app = express();

// set port for express app to listen to
const port = 3000;

// connect to mongoDB
const connectionURL =
  "mongodb+srv://troops:linu$008@cluster0.w4ycqka.mongodb.net/blog-dojo?retryWrites=true&w=majority";

mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    // listen to requests after db connection is established
    app.listen(port, () => {
      console.log(`Express app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// register view egine
app.set("view engine", "ejs");

// middlewares and stattic files
app.use(morgan("dev"));
app.use(express.static("public"));

// mongoose request handlers
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Blog 2",
    snippet: "have a sneek preview",
    body: "have the actual content",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.send(blogs);
  } catch (error) {
    console.log(error);
  }
});

app.get("/blog", async (req, res) => {
  try {
    const blog = await Blog.findById("637aaf135b120d9ec7c0c7c9");
    res.send(blog);
  } catch (error) {
    console.log(error);
  }
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

// middlewares are functions that run in between a req and a res.
app.use((req, res, next) => {
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});
