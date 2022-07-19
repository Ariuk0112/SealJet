const router = require("express").Router();
const {
  header_img,
  show_one_news,
  show_news_progress,
  show_source,
  show_imgs,
  get_count,
  post_count,
  get_popular,
  get_latest,
  get_news_turul,
} = require("./controller");
router.get("/header_img", header_img);
router.post("/show_one_news", show_one_news);
router.post("/show_news_progress", show_news_progress);
router.post("/show_source", show_source);
router.post("/show_imgs", show_imgs);
router.post("/get_count", get_count);
router.post("/post_count", post_count);
router.get("/get_popular", get_popular);
router.get("/get_latest", get_latest);
router.get("/get_news_turul", get_news_turul);
module.exports = router;
