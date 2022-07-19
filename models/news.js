const mongoose = require("mongoose");
const news = new mongoose.Schema(
  {
    url: String,
    name: String,
    desc: String,
    date: Date,
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

module.exports = mongoose.model("news", news);
