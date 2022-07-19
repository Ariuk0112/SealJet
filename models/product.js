// const mongoose = require("mongoose");
// const product = new mongoose.Schema(
//   {
//     cat_id: {
//       type : mongoose.Schema.ObjectId,
//       ref : 'category'
//     },
//     url:{
//       type : String
//     },
//     name: {
//       type : String
//     },
//     code: {
//       type : String
//     },
//     desc: {
//       type : String    },
//     temp: [
//       { name: String},
//     ],
//     speed: [
//       {   name: String },
//     ],
//     pressure: [

//       {name: String },
//     ],
//     material: [
//       { id: 6, type: 3, name: "Экомид" },
//     ],
//   }
//   },
//   {
//     toObject: {
//       virtuals: true,
//     },
//     toJSON: {
//       virtuals: true,
//     },
//     minimize: false,
//   }
// );
// module.exports = mongoose.model("product", product);
