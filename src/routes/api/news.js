var router = require("express").Router();

var mongoose = require("mongoose");
var News = mongoose.model("News");

//GET /api/news?type=news - archived
router.get("/", function (req, res, next) {
  let { type } = req.query;
  let query = {};
  if (type === "news") {
    query = { archivedDate: { $eq: null } };
  } else if (type === "archived") {
    query = { archivedDate: { $ne: null } };
  }
  News.find(query).then((news, err) => {
    if (err) {
      return res.status(200).send({ error: "Error get news list" });
    }
    return res.status(200).send(news);
  });
});

module.exports = router;
