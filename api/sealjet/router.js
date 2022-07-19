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
router.put("/logo/:id", auth, update_logo);
router.delete("/logo/:id", auth, delete_logo);

module.exports = router;
