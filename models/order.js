const mongoose = require("mongoose");
const order = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    product: String,
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

module.exports = mongoose.model("order", order);
