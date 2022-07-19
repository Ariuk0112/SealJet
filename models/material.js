const mongoose = require("mongoose");
const material = new mongoose.Schema(
  {
    url: String,
    name: String,
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
module.exports = mongoose.model("material", material);
