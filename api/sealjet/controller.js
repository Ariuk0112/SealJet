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
    file.name = `/uploads/footer/photo_${item._id}${path.parse(file.name).ext}`;
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
        file.name = `/uploads/footer/photo_${req.params.id}${
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
    file.name = `/uploads/logo/photo_${item._id}${path.parse(file.name).ext}`;
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
        file.name = `/uploads/logo/photo_${req.params.id}${
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
    file.name = `/uploads/main/photo_${item._id}${path.parse(file.name).ext}`;
    str = file.name.split("/").pop();
    file.mv(`${process.env.MAIN_FILE_UPLOAD_PATH}/${str}`, (err) => {
      if (err) {
        throw new myError(
          "Файл хуулах явцад алдаа гарлаа :" + err.message,
          400
        );
      }
    });
    img.name = `/uploads/main/photo_${item._id}${path.parse(img.name).ext}`;
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
};
