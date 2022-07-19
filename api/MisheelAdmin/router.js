// const router = require("express").Router();
// const aboutUs = require("../../models/aboutUs");
// const { auth } = require("../auth/controller");

// const {
//   create_cover,
//   delete_cover,
//   create_brand,
//   delete_brand,
//   show_Background,
//   show_cat,
//   show_sub_cat,
//   show_brands,
//   update_brand,
//   show_product,
//   show_mshiidel,
//   show_createdby,
//   show_mrmisheel,
//   show_coleader,
//   show_price,
//   create_product,
//   delete_product,
//   create_mshiidel,
//   delete_mshiidel,
//   create_createdby,
//   delete_createdby,
//   create_mrmisheel,
//   delete_mrmisheel,
//   create_cat,
//   create_sub_cat,
//   create_coleader,
//   delete_coleader,
//   create_price,
//   delete_price,
//   update_cover,
//   show_sub_cat_with_id,
//   create_history,
//   show_about,
//   show_history,
//   delete_history,
//   create_about,
//   show_services,
//   create_services,
//   update_services,
//   delete_services,
// } = require("./controller");

// router.get("/service", show_services);
// router.post("/service", auth, create_services);
// router.put("/service/:id", auth, update_services);
// router.delete("/service/:id", delete_services);

// router.get("/admin", show_Background);
// router.post("/admin", auth, create_cover);
// router.put("/admin/:id", auth, update_cover);
// router.delete("/admin/:id", delete_cover);

// router.post("/category", auth, create_cat);
// router.get("/category", show_cat);

// router.get("/subcategory", show_sub_cat);
// router.get("/subcategory/:id", show_sub_cat_with_id);
// router.post("/subcategory", auth, create_sub_cat);

// router.get("/brand", show_brands);
// router.post("/brand", auth, create_brand);
// router.put("/brand/:id", auth, update_brand);
// router.delete("/brand/:id", auth, delete_brand);

// router.get("/product", show_product);
// router.post("/product", auth, create_product);
// router.delete("/product/:id", auth, delete_product);

// router.get("/mshiidel", show_mshiidel);
// router.post("/mshiidel", auth, create_mshiidel);
// router.delete("/mshiidel/:id", auth, delete_mshiidel);

// router.get("/createdby", show_createdby);
// router.post("/createdby", auth, create_createdby);
// router.delete("/createdby/:id", auth, delete_createdby);

// router.get("/mrmisheel", show_mrmisheel);
// router.post("/mrmisheel", auth, create_mrmisheel);
// router.delete("/mrmisheel/:id", auth, delete_mrmisheel);

// router.get("/coleader", show_coleader);
// router.post("/coleader", auth, create_coleader);
// router.delete("/coleader/:id", auth, delete_coleader);

// router.get("/price", show_price);
// router.post("/price", auth, create_price);
// router.delete("/price/:id", auth, delete_price);

// router.get("/about", show_about);
// router.post("/about", auth, create_about);

// router.get("/timeline", show_history);
// router.post("/timeline", auth, create_history);
// router.delete("/timeline/:id", auth, delete_history);

// module.exports = router;
