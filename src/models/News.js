var mongoose = require("mongoose");

var NewsSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  content: String,
  author: String,
  archiveDate: Date,
});

mongoose.model("News", NewsSchema);
