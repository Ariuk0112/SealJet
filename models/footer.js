const mongoose = require("mongoose");
const footer = new mongoose.Schema(
  {
    address: String,
    url: String,
    phone: String,
    email: String,
    facebook: String,
    instagram: String,
    twitter: String,
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
module.exports = mongoose.model("footer", footer);
