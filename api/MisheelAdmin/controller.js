// const Mshiidel = require("../../models/mshiidel");
// const Category = require("../../models/Category");
// const Admin = require("../../models/admin");
// const Brand = require("../../models/brand");
// const CoLeader = require("../../models/coleader");
// const Createdby = require("../../models/createdby");
// const Mrmisheel = require("../../models/mrmisheel");
// const Price = require("../../models/price");
// const Product = require("../../models/product");
// const Services = require("../../models/services");
// const SubCategory = require("../../models/subcategory");
// const asyncHandler = require("../../middleware/asyncHandler");
// const myError = require("../../utils/myError");
// const path = require("path");
// const fs = require("fs");
// const isEmpty = require("is-empty");
// const aboutUs = require("../../models/aboutUs");
// const history = require("../../models/history");
// module.exports = {
//   show_Background: asyncHandler(async (req, res, next) => {
//     let query;
//     query = Admin.find();
//     const item = await query;

//     if (!item) {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: "",
//       });
//     } else {
//       res.status(200).json({
//         success: false,
//         count: item.length,
//         data: item,
//       });
//     }
//   }),
//   show_services: asyncHandler(async (req, res, next) => {
//     let query;
//     query = Services.find();
//     const item = await query;

//     if (!item) {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: "",
//       });
//     } else {
//       res.status(200).json({
//         success: false,
//         count: item.length,
//         data: item,
//       });
//     }
//   }),
//   show_cat: asyncHandler(async (req, res, next) => {
//     const category = await Category.find();
//     if (!category) {
//       res.status(200).json({
//         success: true,
//         count: category.length,
//         data: "",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       count: category.length,
//       data: category,
//     });
//   }),

//   show_sub_cat_with_id: asyncHandler(async (req, res, next) => {
//     const subCategory = await Category.findById(
//       {
//         _id: req.params.id,
//       },
//       { subCat: 1 }
//     ).populate("subCat");
//     console.log(req.params.id);
//     res.status(200).json({
//       success: true,
//       count: subCategory.length,
//       data: subCategory,
//     });
//   }),
//   show_sub_cat: asyncHandler(async (req, res, next) => {
//     const subCategory = await SubCategory.find();
//     if (!subCategory) {
//       res.status(200).json({
//         success: true,
//         count: subCategory.length,
//         data: "",
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         count: subCategory.length,
//         data: subCategory,
//       });
//     }
//   }),
//   show_brands: asyncHandler(async (req, res, next) => {
//     const brand = await Brand.find();
//     if (brand) {
//       res.status(200).json({
//         success: true,
//         count: brand.length,
//         data: brand,
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         count: brand.length,
//         data: "",
//       });
//     }
//   }),
//   show_Background: asyncHandler(async (req, res, next) => {
//     const item = await Admin.find();

//     if (!item) {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: "",
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: item,
//       });
//     }
//   }),
//   show_product: asyncHandler(async (req, res, next) => {
//     const item = await Product.find();

//     if (!item) {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: "",
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: item,
//       });
//     }
//   }),
//   show_mshiidel: asyncHandler(async (req, res, next) => {
//     const item = await Mshiidel.find();

//     if (!item) {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: "",
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: item,
//       });
//     }
//   }),
//   show_createdby: asyncHandler(async (req, res, next) => {
//     const item = await Createdby.find();
//     if (!item) {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: "",
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: item,
//       });
//     }
//   }),
//   show_mrmisheel: asyncHandler(async (req, res, next) => {
//     const item = await Mrmisheel.find();

//     if (!item) {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: "",
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: item,
//       });
//     }
//   }),

//   show_price: asyncHandler(async (req, res, next) => {
//     const item = await Price.find();

//     if (!item) {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: "",
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: item,
//       });
//     }
//   }),
//   show_coleader: asyncHandler(async (req, res, next) => {
//     const item = await CoLeader.find();

//     if (!item) {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: "",
//       });
//     } else {
//       res.status(200).json({
//         success: true,
//         count: item.length,
//         data: item,
//       });
//     }
//   }),
//   create_cover: asyncHandler(async (req, res, next) => {
//     const file = req.files.imageUrl;
//     console.log(file.size);

//     let huh = req.body;
//     if (isEmpty(req.body.brandId) || req.body.brandId == " ") {
//       delete huh.brandId;
//     }
//     console.log(huh);
//     let admin;
//     file.name = `/uploads/admin/photo_${req.body.imgType}_${req.body.ordern}${
//       path.parse(file.name).ext
//     }`;
//     str = file.name.split("/").pop();
//     file.mv(`${process.env.ADMIN_FILE_UPLOAD_PATH}/${str}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл хуулах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     huh.imageUrl = file.name;
//     admin = await Admin.create(huh);
//     console.log("insert");

//     res.status(200).json({
//       success: true,
//       data: admin,
//     });
//   }),
//   create_services: asyncHandler(async (req, res, next) => {
//     const file = req.files.imageUrl;
//     console.log(file.size);
//     let services;
//     const huh = await Services.create(req.body);
//     file.name = `/uploads/services/photo_${huh._id}${
//       path.parse(file.name).ext
//     }`;
//     str = file.name.split("/").pop();
//     file.mv(`${process.env.SERVICE_FILE_UPLOAD_PATH}/${str}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл хуулах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     huh.imageUrl = file.name;
//     huh.save();

//     res.status(200).json({
//       success: true,
//       data: huh,
//     });
//   }),
//   update_services: asyncHandler(async (req, res, next) => {
//     let services;
//     const item = await Services.findById(req.params.id);
//     let data = req.body;
//     if (item) {
//       if (req.files) {
//         console.log("itembaina");
//         const file = req.files.imageUrl;
//         console.log("update");
//         file.name = `/uploads/services/photo_${req.params.id}${
//           path.parse(file.name).ext
//         }`;
//         str = item.imageUrl.split("/").pop();
//         req.body.imageUrl = file.name;
//         fs.unlink(`${process.env.SERVICE_FILE_UPLOAD_PATH}/${str}`, (err) => {
//           if (err) {
//             throw new myError(
//               "Файл устгах явцад алдаа гарлаа :" + err.message,
//               400
//             );
//           }
//         });
//         str1 = file.name.split("/").pop();
//         file.mv(`${process.env.SERVICE_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//           if (err) {
//             throw new myError(
//               "Файл хуулах явцад алдаа гарлаа :" + err.message,
//               400
//             );
//           }
//         });

//         services = await Services.findByIdAndUpdate(item._id, data, {
//           new: true,
//           runValidators: true,
//         });
//         res.status(200).json({
//           success: true,
//           data: services,
//         });
//       } else {
//         services = await Services.findByIdAndUpdate(item._id, data, {
//           new: true,
//           runValidators: true,
//         });
//         res.status(200).json({
//           success: true,
//           data: services,
//         });
//       }
//     } else {
//       res.status(200).json({
//         success: false,
//         data: item,
//       });
//     }
//   }),

//   update_cover: asyncHandler(async (req, res, next) => {
//     let admin;

//     const item = await Admin.findById(req.params.id);
//     let data = req.body;
//     if (item) {
//       if (req.files) {
//         console.log("itembaina");
//         const file = req.files.imageUrl;
//         console.log("update");
//         file.name = `/uploads/admin/photo_${req.body.imgType}_${
//           req.body.ordern
//         }${path.parse(file.name).ext}`;
//         str = item.imageUrl.split("/").pop();
//         req.body.imageUrl = file.name;
//         fs.unlink(`${process.env.ADMIN_FILE_UPLOAD_PATH}/${str}`, (err) => {
//           if (err) {
//             throw new myError(
//               "Файл устгах явцад алдаа гарлаа :" + err.message,
//               400
//             );
//           }
//         });
//         str1 = file.name.split("/").pop();
//         file.mv(`${process.env.ADMIN_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//           if (err) {
//             throw new myError(
//               "Файл хуулах явцад алдаа гарлаа :" + err.message,
//               400
//             );
//           }
//         });
//         if (isEmpty(req.body.brandId) || req.body.brandId == " ") {
//           delete data.brandId;
//           const aa = await Admin.updateOne(
//             { _id: item._id },
//             {
//               $unset: { brandId: "" },
//             }
//           );
//         }
//         admin = await Admin.findByIdAndUpdate(item._id, data, {
//           new: true,
//           runValidators: true,
//         });
//         res.status(200).json({
//           success: true,
//           data: admin,
//         });
//       } else {
//         console.log("itembaihgui");
//         if (isEmpty(req.body.brandId) || req.body.brandId == " ") {
//           delete data.brandId;
//           const aa = await Admin.updateOne(
//             { _id: item._id },
//             {
//               $unset: { brandId: "" },
//             }
//           );
//         }
//         admin = await Admin.findByIdAndUpdate(item._id, data, {
//           new: true,
//           runValidators: true,
//         });
//         res.status(200).json({
//           success: true,
//           data: admin,
//         });
//       }
//     } else {
//       res.status(200).json({
//         success: false,
//         data: item,
//       });
//     }
//   }),
//   delete_cover: asyncHandler(async (req, res, next) => {
//     const cover = await Admin.findByIdAndRemove(req.params.id);
//     if (!cover) {
//       throw new myError(`${req.params.id} тай зураг байхгүй байна`, 400);
//     }

//     str = cover.imageUrl.split("/").pop();
//     fs.unlink(`${process.env.ADMIN_FILE_UPLOAD_PATH}/${str}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл устгах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     res.status(200).json({
//       success: true,
//       data: cover,
//     });
//   }),
//   delete_services: asyncHandler(async (req, res, next) => {
//     const services = await Services.findByIdAndRemove(req.params.id);
//     if (!services) {
//       throw new myError(`${req.params.id} тай зураг байхгүй байна`, 400);
//     }

//     str = services.imageUrl.split("/").pop();
//     fs.unlink(`${process.env.SERVICE_FILE_UPLOAD_PATH}/${str}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл устгах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     res.status(200).json({
//       success: true,
//       data: services,
//     });
//   }),

//   create_cat: asyncHandler(async (req, res, next) => {
//     const category = await Category.create(req.body);
//     res.status(200).json({
//       success: true,
//       data: category,
//     });
//   }),

//   create_sub_cat: asyncHandler(async (req, res, next) => {
//     const sub_category = await SubCategory.create(req.body);
//     res.status(200).json({
//       success: true,
//       data: sub_category,
//     });
//   }),
//   update_brand: asyncHandler(async (req, res, next) => {
//     let str, str1;
//     let data;
//     let string;

//     const item = await Brand.findById(req.params.id);
//     if (item) {
//       const img = req.files.brandLogo;
//       str1 = item.brandLogo.split("/").pop();
//       fs.unlink(`${process.env.BRAND_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//         if (err) {
//           throw new myError(
//             "Файл устгах явцад алдаа гарлаа :" + err.message,
//             400
//           );
//         }
//       });
//       item.brandLogo = `${img.name}`;
//       img.name = `/uploads/brand/logo_${item._id}${path.parse(img.name).ext}`;
//       img.mv(`${process.env.BRAND_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//         if (err) {
//           throw new myError(
//             "Файл хуулах явцад алдаа гарлаа :" + err.message,
//             400
//           );
//         }
//       });

//       if (req.files) {
//         if (req.files.brandDetailCoverImg) {
//           const files = req.files.brandDetailCoverImg;

//           str = item.brandDetailCoverImg.split("/").pop();

//           fs.unlink(`${process.env.BRAND_FILE_UPLOAD_PATH}/${str}`, (err) => {
//             if (err) {
//               throw new myError(
//                 "Файл устгах явцад алдаа гарлаа :" + err.message,
//                 400
//               );
//             }
//           });

//           files.name = `/uploads/brand/photo_${item._id}${
//             path.parse(files.name).ext
//           }`;
//           item.brandDetailCoverImg = `${files.name}`;

//           files.mv(`${process.env.BRAND_FILE_UPLOAD_PATH}/${str}`, (err) => {
//             if (err) {
//               throw new myError(
//                 "Файл хуулах явцад алдаа гарлаа :" + err.message,
//                 400
//               );
//             }
//           });
//         }
//         if (isEmpty(req.body.subCategoryId) || req.body.subCategoryId === " ") {
//           data = req.body;
//           delete data.subCategoryId;
//           const aa = await Brand.updateOne(
//             { _id: item._id },
//             {
//               $unset: { subCategoryId: "" },
//             }
//           );
//         } else {
//           data = req.body;
//         }
//         const brand = await Brand.findByIdAndUpdate(item._id, data, {
//           new: true,
//           runValidators: true,
//         });
//         res.status(200).json({
//           success: true,
//           data: brand,
//         });
//       } else {
//         if (isEmpty(req.body.subCategoryId) || req.body.subCategoryId === " ") {
//           data = req.body;
//           delete data.subCategoryId;
//           const aa = await Brand.updateOne(
//             { _id: item._id },
//             {
//               $unset: { subCategoryId: "" },
//             }
//           );
//         } else {
//           data = req.body;
//         }
//         console.log("itembaihgui");
//         const brand = await Brand.findByIdAndUpdate(item._id, data, {
//           new: true,
//           runValidators: true,
//         });
//         res.status(200).json({
//           success: true,
//           data: brand,
//         });
//       }
//     } else {
//       res.status(200).json({
//         success: false,
//         message: "Id tai brand baihgui",
//         data: "",
//       });
//     }
//   }),
//   create_brand: asyncHandler(async (req, res, next) => {
//     const files = req.files.brandDetailCoverImg;
//     const img = req.files.brandLogo;
//     let data;
//     if (isEmpty(req.body.subCategoryId) || req.body.subCategoryId === " ") {
//       data = req.body;
//       delete data.subCategoryId;
//     } else {
//       data = req.body;
//     }

//     const item = await Brand.create(data);
//     files.name = `/uploads/brand/photo_${item._id}${
//       path.parse(files.name).ext
//     }`;
//     item.brandDetailCoverImg = `${files.name}`;
//     str = item.brandDetailCoverImg.split("/").pop();
//     img.name = `/uploads/brand/logo_${item._id}${path.parse(img.name).ext}`;
//     item.brandLogo = `${img.name}`;
//     str1 = item.brandLogo.split("/").pop();
//     files.mv(`${process.env.BRAND_FILE_UPLOAD_PATH}/${str}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл хуулах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     img.mv(`${process.env.BRAND_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл хуулах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     item.save();
//     res.status(200).json({
//       success: true,
//     });
//   }),

//   delete_brand: asyncHandler(async (req, res, next) => {
//     const brand = await Brand.findByIdAndDelete(req.params.id);
//     console.log(req.params.id);
//     if (!brand) {
//       throw new myError(`${req.params.id}-id тай брэнд байхгүй байна`, 400);
//     }
//     str = brand.brandDetailCoverImg.split("/").pop();
//     str1 = brand.brandLogo.split("/").pop();
//     fs.unlink(`${process.env.BRAND_FILE_UPLOAD_PATH}/${str}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл устгах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     fs.unlink(`${process.env.BRAND_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл устгах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     res.status(200).json({
//       success: true,
//       data: brand,
//     });
//   }),

//   create_product: asyncHandler(async (req, res, next) => {
//     const files = [].concat(req.files.productImage);
//     let product = req.body;
//     console.log(product);
//     const item = await Product.create(product);
//     for (i = 0; i < files.length; i++) {
//       console.log("aa");
//       files[i].name = `/uploads/product/photo_${item._id}_${i}${
//         path.parse(files[i].name).ext
//       }`;
//       item.productImage[i] = `${files[i].name}`;
//       let str1 = item.productImage[i].split("/").pop();
//       files[i].mv(`${process.env.PRODUCT_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//         if (err) {
//           throw new myError(
//             "Файл хуулах явцад алдаа гарлаа :" + err.message,
//             400
//           );
//         }
//       });
//     }
//     item.save();
//     res.status(200).json({
//       success: true,
//     });
//   }),

//   delete_product: asyncHandler(async (req, res, next) => {
//     const product = await Product.findByIdAndDelete(req.params.id);
//     if (!product) {
//       throw new myError(`${req.params.id}-id тай бараа байхгүй байна`, 400);
//     }
//     for (i = 0; i < product.productImage.length; i++) {
//       let str1 = product.productImage[i].split("/").pop();
//       fs.unlink(`${process.env.PRODUCT_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//         if (err) {
//           throw new myError(
//             "Файл устгах явцад алдаа гарлаа :" + err.message,
//             400
//           );
//         }
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: product,
//     });
//   }),

//   create_mshiidel: asyncHandler(async (req, res, next) => {
//     const files = [].concat(req.files.images);
//     const image = req.files.img;

//     let data = {
//       images: [],
//     };

//     const item = await Mshiidel.create({ images: [{ img: " " }], img: " " });
//     for (i = 0; i < files.length; i++) {
//       files[i].name = `/uploads/mshiidel/photo_${item._id}_${i}${
//         path.parse(files[i].name).ext
//       }`;
//       data.images.push({ img: files[i].name });
//       let str = files[i].name.split("/").pop();
//       files[i].mv(`${process.env.MSHIIDEL_FILE_UPLOAD_PATH}/${str}`, (err) => {
//         if (err) {
//           throw new myError(
//             "Файл хуулах явцад алдаа гарлаа :" + err.message,
//             400
//           );
//         }
//       });
//     }
//     image.name = `/uploads/mshiidel/photo_${item._id}${
//       path.parse(image.name).ext
//     }`;
//     let str = image.name.split("/").pop();
//     data.img = image.name;
//     image.mv(`${process.env.MSHIIDEL_FILE_UPLOAD_PATH}/${str}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл хуулах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     const mshiidel = await Mshiidel.findByIdAndUpdate(item._id, data, {
//       new: true,
//       runValidators: true,
//     });
//     res.status(200).json({
//       success: true,
//       data: mshiidel,
//     });
//   }),

//   delete_mshiidel: asyncHandler(async (req, res, next) => {
//     const mshiidel = await Mshiidel.findByIdAndDelete(req.params.id);
//     if (!mshiidel) {
//       throw new myError(`${req.params.id}-id тай бараа байхгүй байна`, 400);
//     }
//     for (i = 0; i < mshiidel.images.length; i++) {
//       let str = mshiidel.images[i].img.split("/").pop();
//       fs.unlink(`${process.env.MSHIIDEL_FILE_UPLOAD_PATH}/${str}`, (err) => {
//         if (err) {
//           throw new myError(
//             "Файл устгах явцад алдаа гарлаа :" + err.message,
//             400
//           );
//         }
//       });
//     }
//     let str1 = mshiidel.img.split("/").pop();
//     fs.unlink(`${process.env.MSHIIDEL_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл устгах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     res.status(200).json({
//       success: true,
//       data: mshiidel,
//     });
//   }),

//   create_createdby: asyncHandler(async (req, res, next) => {
//     const files = [].concat(req.files.images);
//     const image = req.files.img;

//     const item = await Createdby.create(req.body);
//     let data = {
//       images: [],
//     };
//     for (i = 0; i < files.length; i++) {
//       files[i].name = `/uploads/createdby/photo_${item._id}_${i}${
//         path.parse(files[i].name).ext
//       }`;
//       data.images.push({ img: files[i].name });
//       let str = files[i].name.split("/").pop();
//       console.log("sda");
//       files[i].mv(`${process.env.CREATEDBY_FILE_UPLOAD_PATH}/${str}`, (err) => {
//         if (err) {
//           throw new myError(
//             "Файл хуулах явцад алдаа гарлаа :" + err.message,
//             400
//           );
//         }
//       });
//     }
//     image.name = `/uploads/createdby/photo_${item._id}${
//       path.parse(image.name).ext
//     }`;
//     let str1 = image.name.split("/").pop();
//     data.img = image.name;
//     image.mv(`${process.env.CREATEDBY_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл хуулах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     const createdby = await Createdby.findByIdAndUpdate(item._id, data, {
//       new: true,
//       runValidators: true,
//     });
//     res.status(200).json({
//       success: true,
//       data: createdby,
//     });
//   }),

//   delete_createdby: asyncHandler(async (req, res, next) => {
//     const createdby = await Createdby.findByIdAndDelete(req.params.id);
//     if (!createdby) {
//       throw new myError(`${req.params.id}-id тай байхгүй байна`, 400);
//     }
//     for (i = 0; i < createdby.images.length; i++) {
//       let str = createdby.images[i].img.split("/").pop();
//       fs.unlink(`${process.env.CREATEDBY_FILE_UPLOAD_PATH}/${str}`, (err) => {
//         if (err) {
//           throw new myError(
//             "Файл устгах явцад алдаа гарлаа :" + err.message,
//             400
//           );
//         }
//       });
//     }
//     let str1 = createdby.img.split("/").pop();
//     fs.unlink(`${process.env.CREATEDBY_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл устгах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     res.status(200).json({
//       success: true,
//       data: createdby,
//     });
//   }),

//   create_mrmisheel: asyncHandler(async (req, res, next) => {
//     const files = req.files.icon;
//     let data = req.body;

//     if (files.length > 1) {
//       throw new myError("Зөвшөөрөгдсөн хэмжээ 1 ширхэг зураг ", 400);
//     }
//     if (!files.mimetype.startsWith("image")) {
//       throw new myError("Зураг upload хийнэ үү", 400);
//     }
//     if (files.size > process.env.MAX_UPLOAD_FILE_SIZE) {
//       throw new myError(
//         "Зурагны хэмжээ хэтэрсэн байна ! дээд хэмжээ 5 мб",
//         400
//       );
//     }
//     const item = await Mrmisheel.create(data);
//     files.name = `/uploads/mrmisheel/icon_${item._id}${
//       path.parse(files.name).ext
//     }`;
//     item.icon = `${files.name}`;
//     let str1 = item.icon.split("/").pop();
//     files.mv(`${process.env.MRMISHEEL_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл хуулах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     item.save();
//     res.status(200).json({
//       success: true,
//     });
//   }),

//   delete_mrmisheel: asyncHandler(async (req, res, next) => {
//     const mrmisheel = await Mrmisheel.findByIdAndDelete(req.params.id);
//     if (!mrmisheel) {
//       throw new myError(`${req.params.id}-id тай бараа байхгүй байна`, 400);
//     }

//     let str1 = mrmisheel.icon.split("/").pop();
//     fs.unlink(`${process.env.MRMISHEEL_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл устгах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });

//     res.status(200).json({
//       success: true,
//       data: mrmisheel,
//     });
//   }),

//   create_coleader: asyncHandler(async (req, res, next) => {
//     const files = req.files.img;
//     let data = req.body;

//     if (files.length > 1) {
//       throw new myError("Зөвшөөрөгдсөн хэмжээ 1 ширхэг зураг ", 400);
//     }
//     if (!files.mimetype.startsWith("image")) {
//       throw new myError("Зураг upload хийнэ үү", 400);
//     }
//     if (files.size > process.env.MAX_UPLOAD_FILE_SIZE) {
//       throw new myError(
//         "Зурагны хэмжээ хэтэрсэн байна ! дээд хэмжээ 5 мб",
//         400
//       );
//     }
//     const item = await CoLeader.create(data);
//     files.name = `/uploads/coleader/icon_${item._id}${
//       path.parse(files.name).ext
//     }`;
//     item.img = `${files.name}`;

//     let str1 = item.img.split("/").pop();
//     files.mv(`${process.env.COLEADER_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл хуулах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     item.save();
//     res.status(200).json({
//       success: true,
//     });
//   }),

//   delete_coleader: asyncHandler(async (req, res, next) => {
//     const coleader = await CoLeader.findByIdAndDelete(req.params.id);
//     if (!coleader) {
//       throw new myError(`${req.params.id}-id тай байхгүй байна`, 400);
//     }

//     let str1 = coleader.img.split("/").pop();
//     fs.unlink(`${process.env.COLEADER_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл устгах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });

//     res.status(200).json({
//       success: true,
//       data: coleader,
//     });
//   }),

//   create_price: asyncHandler(async (req, res, next) => {
//     const files = req.files.priceAllPriceImage;
//     const img = req.files.priceImage;
//     let data = req.body;

//     if (files.length > 1 || img.length > 1) {
//       throw new myError("Зөвшөөрөгдсөн хэмжээ 1 ширхэг зураг ", 400);
//     }
//     if (
//       !files.mimetype.startsWith("image") ||
//       !img.mimetype.startsWith("image")
//     ) {
//       throw new myError("Зураг upload хийнэ үү", 400);
//     }
//     if (
//       files.size > process.env.MAX_UPLOAD_FILE_SIZE ||
//       img.size > process.env.MAX_UPLOAD_FILE_SIZE
//     ) {
//       throw new myError(
//         "Зурагны хэмжээ хэтэрсэн байна ! дээд хэмжээ 5 мб",
//         400
//       );
//     }
//     const item = await Price.create(data);

//     files.name = `/uploads/price/photo_${item._id}${
//       path.parse(files.name).ext
//     }`;
//     item.priceAllPriceImage = `${files.name}`;
//     let str = item.priceAllPriceImage.split("/").pop();
//     img.name = `/uploads/price/cover_${item._id}${path.parse(img.name).ext}`;
//     item.priceImage = `${img.name}`;

//     let str1 = item.priceImage.split("/").pop();
//     files.mv(`${process.env.PRICE_FILE_UPLOAD_PATH}/${str}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл хуулах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     img.mv(`${process.env.PRICE_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл хуулах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     item.save();

//     res.status(200).json({
//       success: true,
//     });
//   }),

//   delete_price: asyncHandler(async (req, res, next) => {
//     const price = await Price.findByIdAndDelete(req.params.id);
//     if (!price) {
//       throw new myError(`${req.params.id}-id тай байхгүй байна`, 400);
//     }

//     let str = price.priceAllPriceImage.split("/").pop();
//     let str1 = price.priceImage.split("/").pop();
//     fs.unlink(`${process.env.PRICE_FILE_UPLOAD_PATH}/${str}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл устгах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     fs.unlink(`${process.env.PRICE_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл устгах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });

//     res.status(200).json({
//       success: true,
//       data: price,
//     });
//   }),
//   create_about: asyncHandler(async (req, res, next) => {
//     const item = await aboutUs.findOne();
//     if (item) {
//       let str, str1;
//       let string;
//       let data = {
//         related: [],
//         text: req.body.text,
//       };
//       if (req.files) {
//         console.log("files bga");
//         if (req.files.related) {
//           console.log("related te");
//           const files = [].concat(req.files.related);
//           for (i = 0; i < item.related.length; i++) {
//             str = item.related[i].img.split("/").pop();
//             fs.unlink(
//               `${process.env.ABOUTUS_FILE_UPLOAD_PATH}/${str}`,
//               (err) => {
//                 if (err) {
//                   throw new myError(
//                     "Файл устгах явцад алдаа гарлаа :" + err.message,
//                     400
//                   );
//                 }
//               }
//             );
//           }
//           for (i = 0; i < files.length; i++) {
//             files[i].name = `/uploads/about/photo_${item._id}_${i}${
//               path.parse(files[i].name).ext
//             }`;
//             data.related.push({ img: files[i].name });
//             let str = files[i].name.split("/").pop();
//             files[i].mv(
//               `${process.env.ABOUTUS_FILE_UPLOAD_PATH}/${str}`,
//               (err) => {
//                 if (err) {
//                   throw new myError(
//                     "Файл хуулах явцад алдаа гарлаа :" + err.message,
//                     400
//                   );
//                 }
//               }
//             );
//           }
//         }
//         if (req.files.cover) {
//           console.log("cover zuragtai");
//           const aa = req.files.cover;
//           let ff = item.cover.split("/").pop();
//           fs.unlink(`${process.env.ABOUTUS_FILE_UPLOAD_PATH}/${ff}`, (err) => {
//             if (err) {
//               throw new myError(
//                 "Файл устгах явцад алдаа гарлаа :" + err.message,
//                 400
//               );
//             }
//           });
//           aa.name = `/uploads/about/photo_${item._id}${
//             path.parse(aa.name).ext
//           }`;
//           data.cover = aa.name;
//           let gg = aa.name.split("/").pop();
//           aa.mv(`${process.env.ABOUTUS_FILE_UPLOAD_PATH}/${gg}`, (err) => {
//             if (err) {
//               throw new myError(
//                 "Файл хуулах явцад алдаа гарлаа :" + err.message,
//                 400
//               );
//             }
//           });
//         }
//         const huh = await aboutUs.findByIdAndUpdate(item._id, data, {
//           new: true,
//           runValidators: true,
//         });
//         res.status(200).json({
//           success: true,
//           data: huh,
//         });
//       } else {
//         const huh = await aboutUs.findByIdAndUpdate(
//           item._id,
//           { text: req.body.text },
//           {
//             new: true,
//             runValidators: true,
//           }
//         );
//         res.status(200).json({
//           success: true,
//           data: huh,
//         });
//       }
//     } else {
//       console.log("item baihguu shineer uusgene");
//       const files = [].concat(req.files.related);
//       const image = req.files.cover;
//       const aa = await aboutUs.create(req.body);
//       let data = {
//         related: [],
//       };
//       for (i = 0; i < files.length; i++) {
//         files[i].name = `/uploads/about/photo_${aa._id}_${i}${
//           path.parse(files[i].name).ext
//         }`;
//         data.related.push({ img: files[i].name });
//         let str = files[i].name.split("/").pop();
//         console.log("sda");
//         files[i].mv(`${process.env.ABOUTUS_FILE_UPLOAD_PATH}/${str}`, (err) => {
//           if (err) {
//             throw new myError(
//               "Файл хуулах явцад алдаа гарлаа :" + err.message,
//               400
//             );
//           }
//         });
//       }
//       image.name = `/uploads/about/photo_${aa._id}${
//         path.parse(image.name).ext
//       }`;
//       let str1 = image.name.split("/").pop();
//       data.cover = image.name;
//       image.mv(`${process.env.ABOUTUS_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//         if (err) {
//           throw new myError(
//             "Файл хуулах явцад алдаа гарлаа :" + err.message,
//             400
//           );
//         }
//       });
//       const huh = await aboutUs.findByIdAndUpdate(aa._id, data, {
//         new: true,
//         runValidators: true,
//       });
//       res.status(200).json({
//         success: true,
//         data: huh,
//       });
//     }
//   }),
//   create_history: asyncHandler(async (req, res, next) => {
//     let image = req.files.img;
//     const item = await history.create(req.body);
//     let data = {};
//     image.name = `/uploads/about/history/photo_${item._id}${
//       path.parse(image.name).ext
//     }`;
//     let str1 = image.name.split("/").pop();
//     console.log("sda");
//     data.img = image.name;
//     console.log("sda2", data);
//     image.mv(`${process.env.HISTORY_FILE_UPLOAD_PATH}/${str1}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл хуулах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     const huh = await history.findByIdAndUpdate(item._id, data, {
//       new: true,
//       runValidators: true,
//     });
//     res.status(200).json({
//       success: true,
//       data: huh,
//     });
//   }),
//   show_about: asyncHandler(async (req, res, next) => {
//     const category = await aboutUs.findOne();
//     if (!category) {
//       res.status(200).json({
//         success: true,
//         count: category.length,
//         data: "",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       count: category.length,
//       data: category,
//     });
//   }),
//   show_history: asyncHandler(async (req, res, next) => {
//     const category = await history.find();
//     if (!category) {
//       res.status(200).json({
//         success: true,
//         count: category.length,
//         data: " ",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       count: category.length,
//       data: category,
//     });
//   }),

//   delete_history: asyncHandler(async (req, res, next) => {
//     const price = await history.findByIdAndDelete(req.params.id);
//     if (!price) {
//       res.status(300).json({
//         success: false,
//         data: " ",
//       });
//     }

//     let str = price.img.split("/").pop();
//     fs.unlink(`${process.env.HISTORY_FILE_UPLOAD_PATH}/${str}`, (err) => {
//       if (err) {
//         throw new myError(
//           "Файл устгах явцад алдаа гарлаа :" + err.message,
//           400
//         );
//       }
//     });
//     res.status(200).json({
//       success: true,
//       data: price,
//     });
//   }),
// };
