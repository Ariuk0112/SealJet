const router = require("express").Router();
const { auth } = require("../auth/controller");

const {
  create_footer,
  show_footer,
  update_footer,
  delete_footer,
  show_category,
  create_category,
  update_category,
  delete_category,
  create_logo,
  show_logo,
  update_logo,
  delete_logo,
  show_main,
  create_main,
  create_product,
  insert_temp_product,
  delete_temp_product,
  insert_speed_product,
  delete_speed_product,
  show_product,
  show_temp_product,
  show_speed_product,
  insert_pressure_product,
  show_pressure_product,
  delete_pressure_product,
  insert_material_product,
  show_material_product,
  delete_material_product,
  show_all_news,
  show_one_news,
  create_news,
  update_news,
  delete_news,
  show_material,
  create_material,
  update_material,
  delete_material,
  update_main,
  delete_main,
  show_orders,
  show_order,
  create_order,
  delete_order,
  delete_product,
} = require("./controller");

router.get("/category", show_category);
router.post("/category", auth, create_category);
router.put("/category/:id", auth, update_category);
router.delete("/category/:id", auth, delete_category);

router.get("/footer", show_footer);
router.post("/footer", auth, create_footer);
router.put("/footer/:id", auth, update_footer);
router.delete("/footer/:id", auth, delete_footer);

router.get("/logo", show_logo);
router.post("/logo", auth, create_logo);
router.put("/logo/:id", auth, update_logo);
router.delete("/logo/:id", auth, delete_logo);

router.get("/main", show_main);
router.post("/main", auth, create_main);
router.put("/main/:id", auth, update_main);
router.delete("/main/:id", auth, delete_main);

router.get("/product", show_product);
router.post("/product", auth, create_product);
router.delete("/product/:id", auth, delete_product);

router.post("/productTemp/:id", auth, insert_temp_product);
router.get("/productTemp/:id", show_temp_product);
router.delete("/productTemp", auth, delete_temp_product);

router.post("/productSpeed/:id", auth, insert_speed_product);
router.get("/productSpeed/:id", show_speed_product);
router.delete("/productSpeed", auth, delete_speed_product);

router.post("/productPressure/:id", auth, insert_pressure_product);
router.get("/productPressure/:id", show_pressure_product);
router.delete("/productPressure", auth, delete_pressure_product);

router.post("/productMaterial/:id", auth, insert_material_product);
router.get("/productMaterial/:id", show_material_product);
router.delete("/productMaterial", auth, delete_material_product);

router.get("/news", show_all_news);
router.get("/news/:id", show_one_news);
router.post("/news", auth, create_news);
router.put("/news/:id", auth, update_news);
router.delete("/news/:id", auth, delete_news);

router.get("/order", show_orders);
router.get("/order/:id", show_order);
router.post("/order", auth, create_order);
router.delete("/order/:id", auth, delete_order);

router.get("/material", show_material);
router.post("/material", auth, create_material);
router.put("/material/:id", auth, update_material);
router.delete("/material/:id", auth, delete_material);

module.exports = router;
