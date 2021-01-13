const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/news", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require("./src/models/News");
app.use(require("./src/routes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
