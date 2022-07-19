const mongoose = require("mongoose");
const main = new mongoose.Schema(
  {
    url1: String,
    url2: String,
    title: String,
    desc: String,
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
    minimize: false,
  }
);
module.exports = mongoose.model("main", main);
