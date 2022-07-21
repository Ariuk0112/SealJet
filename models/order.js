const mongoose = require("mongoose");
const order = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    product: String,
    createdDate: {
      type: Date,
      default: Date.now(),
    },
    status: String,
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

module.exports = mongoose.model("order", order);
