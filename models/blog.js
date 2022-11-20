const { timeStamp } = require("console");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create blog schema
const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    snippet: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
);

// create blog model
const Blog = mongoose.model("Blog", blogSchema);

// export model to be use in other parts of the application
module.exports = Blog;
