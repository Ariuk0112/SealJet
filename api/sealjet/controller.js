const asyncHandler = require("../../middleware/asyncHandler");
const myError = require("../../utils/myError");
const path = require("path");
const fs = require("fs");
const isEmpty = require("is-empty");
const Category = require("../../models/category");
const Footer = require("../../models/footer");
const Logo = require("../../models/logo");
const Main = require("../../models/main");
const Material = require("../../models/material");
const News = require("../../models/news");
const Order = require("../../models/order");
const Product = require("../../models/product");
const isempty = require("isempty");
module.exports = {
  show_category: asyncHandler(async (req, res, next) => {
    let query;
    query = Category.find();
    const item = await query;

    if (!item) {
      res.status(200).json({
        success: true,
        count: item.length,
        data: "",
      });
    } else {
      res.status(200).json({
        success: false,
        count: item.length,
        data: item,
      });
    }
  }),

  create_category: asyncHandler(async (req, res, next) => {
    const item = await Category.find(req.body);
    if (isempty(item)) {
      const category = await Category.create(req.body);
      res.status(200).json({
        success: true,
        data: category,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Category already exists",
      });
    }
  }),

  update_category: asyncHandler(async (req, res, next) => {
    let item = await Category.findById(req.params.id);
    if (item) {
      item = await Category.findByIdAndUpdate(item._id, req.body);
      res.status(200).json({
        success: true,
        data: item,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Category doesn't exists!",
      });
    }
  }),
  delete_category: asyncHandler(async (req, res, next) => {
    let item = await Category.findById(req.params.id);
    if (item) {
      item = await Category.findByIdAndRemove(item._id);
      res.status(200).json({
        success: true,
        data: item,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Item does not exists",
      });
    }
  }),

  create_footer: asyncHandler(async (req, res, next) => {
    const file = req.files.url;
    let item = await Footer.create(req.body);
    file.name = `/sealjet/uploads/footer/photo_${item._id}${
      path.parse(file.name).ext
    }`;
    str = file.name.split("/").pop();
    file.mv(`${process.env.FOOTER_FILE_UPLOAD_PATH}/${str}`, (err) => {
      if (err) {
        throw new myError(
          "Файл хуулах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    item.url = file.name;
    item.save();
    res.status(200).json({
      success: true,
      data: item,
    });
  }),

  show_footer: asyncHandler(async (req, res, next) => {
    const item = await Footer.find();
    res.status(200).json({
      success: true,
      data: item,
    });
  }),
  update_footer: asyncHandler(async (req, res, next) => {
    let footer;
    const item = await Footer.findById(req.params.id);
    let data = req.body;
    if (item) {
      if (req.files) {
        const file = req.files.url;
        file.name = `/sealjet/uploads/footer/photo_${req.params.id}${
          path.parse(file.name).ext
        }`;
        str = item.url.split("/").pop();
        req.body.url = file.name;
        fs.unlink(`${process.env.FOOTER_FILE_UPLOAD_PATH}/${str}`, (err) => {
          if (err) {
            throw new myError(
              "Файл устгах явцад алдаа гарлаа :" + err.message,
              400
            );
          }
        });
        str1 = file.name.split("/").pop();
        file.mv(`${process.env.FOOTER_FILE_UPLOAD_PATH}/${str1}`, (err) => {
          if (err) {
            throw new myError(
              "Файл хуулах явцад алдаа гарлаа :" + err.message,
              400
            );
          }
        });

        footer = await Footer.findByIdAndUpdate(item._id, data, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({
          success: true,
          data: footer,
        });
      } else {
        footer = await Footer.findByIdAndUpdate(item._id, data, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({
          success: true,
          data: footer,
        });
      }
    } else {
      res.status(200).json({
        success: false,
        data: item,
      });
    }
  }),
  delete_footer: asyncHandler(async (req, res, next) => {
    const footer = await Footer.findByIdAndRemove(req.params.id);
    if (!footer) {
      throw new myError(`${req.params.id} тай зураг байхгүй байна`, 400);
    }

    str = footer.url.split("/").pop();
    fs.unlink(`${process.env.FOOTER_FILE_UPLOAD_PATH}/${str}`, (err) => {
      if (err) {
        throw new myError(
          "Файл устгах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    res.status(200).json({
      success: true,
      data: footer,
    });
  }),
  create_logo: asyncHandler(async (req, res, next) => {
    const file = req.files.img;
    let item = await Logo.create(req.body);
    file.name = `/sealjet/uploads/logo/photo_${item._id}${
      path.parse(file.name).ext
    }`;
    str = file.name.split("/").pop();
    file.mv(`${process.env.LOGO_FILE_UPLOAD_PATH}/${str}`, (err) => {
      if (err) {
        throw new myError(
          "Файл хуулах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    item.img = file.name;
    item.save();
    res.status(200).json({
      success: true,
      data: item,
    });
  }),
  show_logo: asyncHandler(async (req, res, next) => {
    const item = await Logo.find();
    res.status(200).json({
      success: true,
      data: item,
    });
  }),

  update_logo: asyncHandler(async (req, res, next) => {
    let logo;
    const item = await Logo.findById(req.params.id);
    let data = req.body;
    if (item) {
      if (req.files) {
        const file = req.files.img;
        file.name = `/sealjet/uploads/logo/photo_${req.params.id}${
          path.parse(file.name).ext
        }`;
        str = item.img.split("/").pop();
        req.body.img = file.name;
        fs.unlink(`${process.env.LOGO_FILE_UPLOAD_PATH}/${str}`, (err) => {
          if (err) {
            throw new myError(
              "Файл устгах явцад алдаа гарлаа :" + err.message,
              400
            );
          }
        });
        str1 = file.name.split("/").pop();
        file.mv(`${process.env.LOGO_FILE_UPLOAD_PATH}/${str1}`, (err) => {
          if (err) {
            throw new myError(
              "Файл хуулах явцад алдаа гарлаа :" + err.message,
              400
            );
          }
        });

        logo = await Logo.findByIdAndUpdate(item._id, data, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({
          success: true,
          data: logo,
        });
      } else {
        logo = await Logo.findByIdAndUpdate(item._id, data, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({
          success: true,
          data: logo,
        });
      }
    } else {
      res.status(200).json({
        success: false,
        data: item,
      });
    }
  }),
  delete_logo: asyncHandler(async (req, res, next) => {
    const logo = await Logo.findByIdAndRemove(req.params.id);
    if (!logo) {
      throw new myError(`${req.params.id} тай зураг байхгүй байна`, 400);
    }

    str = logo.img.split("/").pop();
    fs.unlink(`${process.env.LOGO_FILE_UPLOAD_PATH}/${str}`, (err) => {
      if (err) {
        throw new myError(
          "Файл устгах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    res.status(200).json({
      success: true,
      data: logo,
    });
  }),

  create_main: asyncHandler(async (req, res, next) => {
    const file = req.files.url1;
    const img = req.files.url2;
    let item = await Main.create(req.body);
    file.name = `/sealjet/uploads/main/photo_${item._id}_0${
      path.parse(file.name).ext
    }`;
    str = file.name.split("/").pop();
    file.mv(`${process.env.MAIN_FILE_UPLOAD_PATH}/${str}`, (err) => {
      if (err) {
        throw new myError(
          "Файл хуулах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    img.name = `/sealjet/uploads/main/photo_${item._id}_1${
      path.parse(img.name).ext
    }`;
    str1 = img.name.split("/").pop();
    img.mv(`${process.env.MAIN_FILE_UPLOAD_PATH}/${str1}`, (err) => {
      if (err) {
        throw new myError(
          "Файл хуулах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    item.url1 = file.name;
    item.url2 = img.name;
    item.save();
    res.status(200).json({
      success: true,
      data: item,
    });
  }),

  show_main: asyncHandler(async (req, res, next) => {
    const item = await Main.find();
    res.status(200).json({
      success: true,
      data: item,
    });
  }),

  update_main: asyncHandler(async (req, res, next) => {
    let main;
    const item = await Main.findById(req.params.id);
    let data = req.body;
    if (item) {
      if (req.files) {
        if (!isEmpty(req.files.url1)) {
          const file = req.files.url1;

          str4 = item.url1.split("/").pop();
          fs.unlink(`${process.env.MAIN_FILE_UPLOAD_PATH}/${str4}`, (err) => {
            if (err) {
              throw new myError(
                "Файл устгах явцад алдаа гарлаа :" + err.message,
                400
              );
            }
          });
          file.mv(`${process.env.MAIN_FILE_UPLOAD_PATH}/${str4}`, (err) => {
            if (err) {
              throw new myError(
                "Файл хуулах явцад алдаа гарлаа :" + err.message,
                400
              );
            }
          });
        }
        if (!isEmpty(req.files.url2)) {
          const file = req.files.url2;

          str = item.url2.split("/").pop();
          fs.unlink(`${process.env.MAIN_FILE_UPLOAD_PATH}/${str}`, (err) => {
            if (err) {
              throw new myError(
                "Файл устгах явцад алдаа гарлаа :" + err.message,
                400
              );
            }
          });
          file.mv(`${process.env.MAIN_FILE_UPLOAD_PATH}/${str}`, (err) => {
            if (err) {
              throw new myError(
                "Файл хуулах явцад алдаа гарлаа :" + err.message,
                400
              );
            }
          });
        }
        main = await Main.findByIdAndUpdate(item._id, data, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({
          success: true,
          data: main,
        });
      } else {
        main = await Main.findByIdAndUpdate(item._id, data, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({
          success: true,
          data: main,
        });
      }
    } else {
      res.status(200).json({
        success: false,
        data: item,
      });
    }
  }),

  delete_main: asyncHandler(async (req, res, next) => {
    const main = await Main.findByIdAndRemove(req.params.id);
    if (!main) {
      throw new myError(`${req.params.id} тай зураг байхгүй байна`, 400);
    }

    str = main.url1.split("/").pop();
    fs.unlink(`${process.env.MAIN_FILE_UPLOAD_PATH}/${str}`, (err) => {
      if (err) {
        throw new myError(
          "Файл устгах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    str1 = main.url2.split("/").pop();
    fs.unlink(`${process.env.MAIN_FILE_UPLOAD_PATH}/${str1}`, (err) => {
      if (err) {
        throw new myError(
          "Файл устгах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    res.status(200).json({
      success: true,
      data: main,
    });
  }),

  create_news: asyncHandler(async (req, res, next) => {
    const img = req.files.url;
    let item = await News.create(req.body);

    img.name = `/sealjet/uploads/news/photo_${item._id}${
      path.parse(img.name).ext
    }`;
    str1 = img.name.split("/").pop();
    img.mv(`${process.env.NEWS_FILE_UPLOAD_PATH}/${str1}`, (err) => {
      if (err) {
        throw new myError(
          "Файл хуулах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    item.url = img.name;
    item.save();
    res.status(200).json({
      success: true,
      data: item,
    });
  }),
  show_all_news: asyncHandler(async (req, res, next) => {
    const item = await News.find();
    res.status(200).json({
      success: true,
      data: item,
    });
  }),
  show_one_news: asyncHandler(async (req, res, next) => {
    const item = await News.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: item,
    });
  }),
  update_news: asyncHandler(async (req, res, next) => {
    let news;
    const item = await News.findById(req.params.id);
    let data = req.body;
    if (item) {
      if (req.files) {
        const file = req.files.url;
        file.name = `/sealjet/uploads/news/photo_${req.params.id}${
          path.parse(file.name).ext
        }`;
        str = item.url.split("/").pop();
        req.body.url = file.name;
        fs.unlink(`${process.env.NEWS_FILE_UPLOAD_PATH}/${str}`, (err) => {
          if (err) {
            throw new myError(
              "Файл устгах явцад алдаа гарлаа :" + err.message,
              400
            );
          }
        });
        str1 = file.name.split("/").pop();
        file.mv(`${process.env.NEWS_FILE_UPLOAD_PATH}/${str1}`, (err) => {
          if (err) {
            throw new myError(
              "Файл хуулах явцад алдаа гарлаа :" + err.message,
              400
            );
          }
        });

        news = await News.findByIdAndUpdate(item._id, data, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({
          success: true,
          data: news,
        });
      } else {
        news = await News.findByIdAndUpdate(item._id, data, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({
          success: true,
          data: news,
        });
      }
    } else {
      res.status(200).json({
        success: false,
        data: item,
      });
    }
  }),
  delete_news: asyncHandler(async (req, res, next) => {
    const news = await News.findByIdAndRemove(req.params.id);
    if (!news) {
      throw new myError(`${req.params.id} тай зураг байхгүй байна`, 400);
    }

    str = news.url.split("/").pop();
    fs.unlink(`${process.env.NEWS_FILE_UPLOAD_PATH}/${str}`, (err) => {
      if (err) {
        throw new myError(
          "Файл устгах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    res.status(200).json({
      success: true,
      data: news,
    });
  }),

  create_product: asyncHandler(async (req, res, next) => {
    const img = req.files.url;
    let item = await Product.create(req.body);

    img.name = `/sealjet/uploads/product/photo_${item._id}${
      path.parse(img.name).ext
    }`;
    str1 = img.name.split("/").pop();
    img.mv(`${process.env.PRODUCT_FILE_UPLOAD_PATH}/${str1}`, (err) => {
      if (err) {
        throw new myError(
          "Файл хуулах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    item.url = img.name;
    item.save();
    console.log(Date.now());
    res.status(200).json({
      success: true,
      data: item,
    });
  }),
  update_product: asyncHandler(async (req, res, next) => {
    let product;
    const item = await Product.findById(req.params.id);
    let data = req.body;
    if (item) {
      if (req.files) {
        const file = req.files.url;
        file.name = `/sealjet/uploads/product/photo_${req.params.id}${
          path.parse(file.name).ext
        }`;
        str = item.url.split("/").pop();
        req.body.url = file.name;
        fs.unlink(`${process.env.PRODUCT_FILE_UPLOAD_PATH}/${str}`, (err) => {
          if (err) {
            throw new myError(
              "Файл устгах явцад алдаа гарлаа :" + err.message,
              400
            );
          }
        });
        str1 = file.name.split("/").pop();
        file.mv(`${process.env.PRODUCT_FILE_UPLOAD_PATH}/${str1}`, (err) => {
          if (err) {
            throw new myError(
              "Файл хуулах явцад алдаа гарлаа :" + err.message,
              400
            );
          }
        });

        product = await Product.findByIdAndUpdate(item._id, data, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({
          success: true,
          data: product,
        });
      } else {
        product = await Product.findByIdAndUpdate(item._id, data, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({
          success: true,
          data: product,
        });
      }
    } else {
      res.status(200).json({
        success: false,
        data: item,
      });
    }
  }),
  show_product: asyncHandler(async (req, res, next) => {
    let query;
    query = Product.find();
    const item = await query;

    if (!item) {
      res.status(200).json({
        success: true,
        count: item.length,
        data: "",
      });
    } else {
      res.status(200).json({
        success: true,
        count: item.length,
        data: item,
      });
    }
  }),
  delete_product: asyncHandler(async (req, res, next) => {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) {
      throw new myError(`${req.params.id} тай зураг байхгүй байна`, 400);
    }

    str = product.url.split("/").pop();
    fs.unlink(`${process.env.PRODUCT_FILE_UPLOAD_PATH}/${str}`, (err) => {
      if (err) {
        throw new myError(
          "Файл устгах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    res.status(200).json({
      success: true,
      data: product,
    });
  }),
  insert_temp_product: asyncHandler(async (req, res, next) => {
    let item = await Product.findById(req.params.id);
    if (isEmpty(item)) {
      throw new myError(`${req.params.id} id тай бараа байхгүй байна`, 400);
    }
    item = await Product.updateOne(
      { _id: req.params.id },
      { $push: { temp: { name: req.body.name } } }
    );
    res.status(200).json({
      success: true,
      data: item,
    });
  }),
  show_temp_product: asyncHandler(async (req, res, next) => {
    let query;
    query = Product.findById(req.params.id, { temp: 1, _id: 1 });
    const item = await query;

    if (!item) {
      res.status(200).json({
        success: true,
        count: item.length,
        data: "",
      });
    } else {
      res.status(200).json({
        success: false,
        count: item.length,
        data: item,
      });
    }
  }),
  delete_temp_product: asyncHandler(async (req, res, next) => {
    let item = await Product.findById(req.body.productId);
    if (isEmpty(item)) {
      throw new myError(
        `${req.body.productId} id тай бараа байхгүй байна`,
        400
      );
    }
    item = await Product.updateOne(
      { _id: req.body.productId },
      { $pull: { temp: { _id: req.body.arrayId } } }
    );
    res.status(200).json({
      success: true,
      data: item,
    });
  }),

  insert_speed_product: asyncHandler(async (req, res, next) => {
    let item = await Product.findById(req.params.id);
    if (isEmpty(item)) {
      throw new myError(`${req.params.id} id тай бараа байхгүй байна`, 400);
    }
    item = await Product.updateOne(
      { _id: req.params.id },
      { $push: { speed: { name: req.body.name } } }
    );
    res.status(200).json({
      success: true,
      data: item,
    });
  }),
  show_speed_product: asyncHandler(async (req, res, next) => {
    let query;
    query = Product.findById(req.params.id, { speed: 1, _id: 1 });
    const item = await query;

    if (!item) {
      res.status(200).json({
        success: true,
        count: item.length,
        data: "",
      });
    } else {
      res.status(200).json({
        success: false,
        count: item.length,
        data: item,
      });
    }
  }),
  delete_speed_product: asyncHandler(async (req, res, next) => {
    let item = await Product.findById(req.body.productId);
    if (isEmpty(item)) {
      throw new myError(`${req.body.id1} id тай бараа байхгүй байна`, 400);
    }
    item = await Product.updateOne(
      { _id: req.body.productId },
      { $pull: { speed: { _id: req.body.arrayId } } }
    );
    res.status(200).json({
      success: true,
      data: item,
    });
  }),
  insert_pressure_product: asyncHandler(async (req, res, next) => {
    let item = await Product.findById(req.params.id);
    if (isEmpty(item)) {
      throw new myError(`${req.params.id} id тай бараа байхгүй байна`, 400);
    }
    item = await Product.updateOne(
      { _id: req.params.id },
      { $push: { pressure: { name: req.body.name } } }
    );
    res.status(200).json({
      success: true,
      data: item,
    });
  }),
  show_pressure_product: asyncHandler(async (req, res, next) => {
    let query;
    query = Product.findById(req.params.id, { pressure: 1, _id: 1 });
    const item = await query;

    if (!item) {
      res.status(200).json({
        success: true,
        count: item.length,
        data: "",
      });
    } else {
      res.status(200).json({
        success: false,
        count: item.length,
        data: item,
      });
    }
  }),
  delete_pressure_product: asyncHandler(async (req, res, next) => {
    let item = await Product.findById(req.body.productId);
    if (isEmpty(item)) {
      throw new myError(`${req.body.id1} id тай бараа байхгүй байна`, 400);
    }
    item = await Product.updateOne(
      { _id: req.body.productId },
      { $pull: { pressure: { _id: req.body.arrayId } } }
    );
    res.status(200).json({
      success: true,
      data: item,
    });
  }),

  insert_material_product: asyncHandler(async (req, res, next) => {
    let item = await Product.findById(req.params.id);
    if (isEmpty(item)) {
      throw new myError(`${req.params.id} id тай бараа байхгүй байна`, 400);
    }
    item = await Product.updateOne(
      { _id: req.params.id },
      { $push: { material: { name: req.body.name, type: req.body.type } } }
    );
    res.status(200).json({
      success: true,
      data: item,
    });
  }),
  show_material_product: asyncHandler(async (req, res, next) => {
    let query;
    query = Product.findById(req.params.id, { material: 1, _id: 1 });
    const item = await query;

    if (!item) {
      res.status(200).json({
        success: true,
        count: item.length,
        data: "",
      });
    } else {
      res.status(200).json({
        success: false,
        count: item.length,
        data: item,
      });
    }
  }),
  delete_material_product: asyncHandler(async (req, res, next) => {
    let item = await Product.findById(req.body.productId);
    if (isEmpty(item)) {
      throw new myError(`${req.body.id1} id тай бараа байхгүй байна`, 400);
    }
    item = await Product.updateOne(
      { _id: req.body.productId },
      { $pull: { material: { _id: req.body.arrayId } } }
    );
    res.status(200).json({
      success: true,
      data: item,
    });
  }),

  create_material: asyncHandler(async (req, res, next) => {
    const file = req.files.url;
    let item = await Material.create(req.body);
    file.name = `/sealjet/uploads/material/photo_${item._id}${
      path.parse(file.name).ext
    }`;
    str = file.name.split("/").pop();
    file.mv(`${process.env.MATERIAL_FILE_UPLOAD_PATH}/${str}`, (err) => {
      if (err) {
        throw new myError(
          "Файл хуулах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    item.url = file.name;
    item.save();
    res.status(200).json({
      success: true,
      data: item,
    });
  }),
  show_material: asyncHandler(async (req, res, next) => {
    const item = await Material.find();
    res.status(200).json({
      success: true,
      data: item,
    });
  }),

  update_material: asyncHandler(async (req, res, next) => {
    let material;
    const item = await Material.findById(req.params.id);
    let data = req.body;
    if (item) {
      if (req.files) {
        const file = req.files.url;
        file.name = `/sealjet/uploads/material/photo_${req.params.id}${
          path.parse(file.name).ext
        }`;
        str = item.url.split("/").pop();
        req.body.url = file.name;
        fs.unlink(`${process.env.MATERIAL_FILE_UPLOAD_PATH}/${str}`, (err) => {
          if (err) {
            throw new myError(
              "Файл устгах явцад алдаа гарлаа :" + err.message,
              400
            );
          }
        });
        str1 = file.name.split("/").pop();
        file.mv(`${process.env.MATERIAL_FILE_UPLOAD_PATH}/${str1}`, (err) => {
          if (err) {
            throw new myError(
              "Файл хуулах явцад алдаа гарлаа :" + err.message,
              400
            );
          }
        });

        material = await Material.findByIdAndUpdate(item._id, data, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({
          success: true,
          data: material,
        });
      } else {
        material = await Material.findByIdAndUpdate(item._id, data, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({
          success: true,
          data: material,
        });
      }
    } else {
      res.status(200).json({
        success: false,
        data: item,
      });
    }
  }),
  delete_material: asyncHandler(async (req, res, next) => {
    const material = await Material.findByIdAndRemove(req.params.id);
    if (!material) {
      throw new myError(`${req.params.id} тай зураг байхгүй байна`, 400);
    }

    str = material.url.split("/").pop();
    fs.unlink(`${process.env.MATERIAL_FILE_UPLOAD_PATH}/${str}`, (err) => {
      if (err) {
        throw new myError(
          "Файл устгах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    res.status(200).json({
      success: true,
      data: material,
    });
  }),
  show_orders: asyncHandler(async (req, res, next) => {
    let query;
    query = Order.find();
    const item = await query;

    if (!item) {
      res.status(200).json({
        success: true,
        count: item.length,
        data: "",
      });
    } else {
      res.status(200).json({
        success: false,
        count: item.length,
        data: item,
      });
    }
  }),
  show_order: asyncHandler(async (req, res, next) => {
    let query;
    query = Order.findById(req.params.id);
    const item = await query;

    if (!item) {
      res.status(200).json({
        success: true,
        count: item.length,
        data: "",
      });
    } else {
      res.status(200).json({
        success: true,
        count: item.length,
        data: item,
      });
    }
  }),

  create_order: asyncHandler(async (req, res, next) => {
    const order = await Order.create(req.body);
    res.status(200).json({
      success: true,
      data: order,
    });
  }),

  delete_order: asyncHandler(async (req, res, next) => {
    let item = await Order.findById(req.params.id);
    if (item) {
      item = await Order.findByIdAndRemove(item._id);
      res.status(200).json({
        success: true,
        data: item,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Item does not exists",
      });
    }
  }),
};
