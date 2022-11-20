const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { title } = require("process");

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
app.use(express.urlencoded({ extended: true })); // used to accept form data

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  //   res.send("Hello Express!");
  res.render("about", { title: "About" });
});

// blog routes
app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render("index", { title: "All Blogs", blogs });
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

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

app.post("/blogs", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.redirect("/blogs");
  } catch (error) {
    console.log(error);
  }
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "Create Blog" });
});
