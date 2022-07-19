const db = require("../db");

module.exports = {
  getBackgroundImg: (req, res) => {
    db.query("select * from t_background_img", [], (err, results) => {
      if (err && err.message.startsWith("ER_SIGNAL_EXCEPTION")) {
        return res.json({
          success: 0,
          message: err.message.replace("ER_SIGNAL_EXCEPTION: ", ""),
        });
      } else if (err) {
        return res.status(500).json({
          success: 0,
          message: err.message,
        });
      }

      return res.json({
        stats: 1,
        results,
      });
    });
  },
  getFeaturedShowroom: (req, res) => {
    db.query(`select * from `, [req.body.id], (err, results) => {
      if (err && err.message.startsWith("ER_SIGNAL_EXCEPTION")) {
        return res.json({
          success: 0,
          message: err.message.replace("ER_SIGNAL_EXCEPTION: ", ""),
        });
      } else if (err) {
        return res.status(500).json({
          success: 0,
          message: err.message,
        });
      }
      return res.json({
        success: 1,
        results,
      });
    });
  },
  header_img: (req, res) => {
    db.query(`select * from img_table group by news_id`, [], (err, results) => {
      if (err && err.message.startsWith("ER_SIGNAL_EXCEPTION")) {
        return res.json({
          success: 0,
          message: err.message.replace("ER_SIGNAL_EXCEPTION: ", ""),
        });
      } else if (err) {
        return res.status(500).json({
          success: 0,
          message: err.message,
        });
      }
      return res.json({
        success: 1,
        results,
      });
    });
  },
  show_one_news: (req, res) => {
    db.query("call show_one_news(?);", [req.body.news_id], (err, results) => {
      if (err && err.message.startsWith("ER_SIGNAL_EXCEPTION")) {
        return res.json({
          success: 0,
          message: err.message.replace("ER_SIGNAL_EXCEPTION: ", ""),
        });
      } else if (err) {
        return res.status(500).json({
          success: 0,
          message: err.message,
        });
      }

      return res.json({
        success: 1,
        results,
      });
    });
  },
  show_news_progress: (req, res) => {
    db.query(
      `select * from news_info_table where news_id = ?;`,
      [req.body.news_id],
      (err, results) => {
        if (err && err.message.startsWith("ER_SIGNAL_EXCEPTION")) {
          return res.json({
            success: 0,
            message: err.message.replace("ER_SIGNAL_EXCEPTION: ", ""),
          });
        } else if (err) {
          return res.status(500).json({
            success: 0,
            message: err.message,
          });
        }

        return res.json({
          success: 1,
          results,
        });
      }
    );
  },
  show_source: (req, res) => {
    db.query(
      `select * from source_table where news_id=?;`,
      [req.body.news_id],
      (err, results) => {
        if (err && err.message.startsWith("ER_SIGNAL_EXCEPTION")) {
          return res.json({
            success: 0,
            message: err.message.replace("ER_SIGNAL_EXCEPTION: ", ""),
          });
        } else if (err) {
          return res.status(500).json({
            success: 0,
            message: err.message,
          });
        }

        return res.json({
          success: 1,
          results,
        });
      }
    );
  },
  show_imgs: (req, res) => {
    db.query(
      `select * from img_table where news_id = ?;;`,
      [req.body.news_id],
      (err, results) => {
        if (err && err.message.startsWith("ER_SIGNAL_EXCEPTION")) {
          return res.json({
            success: 0,
            message: err.message.replace("ER_SIGNAL_EXCEPTION: ", ""),
          });
        } else if (err) {
          return res.status(500).json({
            success: 0,
            message: err.message,
          });
        }

        return res.json({
          success: 1,
          results,
        });
      }
    );
  },
  get_count: (req, res) => {
    db.query(
      `select count from news_count where news_id = ?;`,
      [req.body.news_id],
      (err, results) => {
        if (err && err.message.startsWith("ER_SIGNAL_EXCEPTION")) {
          return res.json({
            success: 0,
            message: err.message.replace("ER_SIGNAL_EXCEPTION: ", ""),
          });
        } else if (err) {
          return res.status(500).json({
            success: 0,
            message: err.message,
          });
        }

        return res.json({
          success: 1,
          results,
        });
      }
    );
  },
  post_count: (req, res) => {
    db.query(
      `update news_count set count = ?  where news_id = ?;`,
      [req.body.count, req.body.news_id],
      (err, results) => {
        if (err && err.message.startsWith("ER_SIGNAL_EXCEPTION")) {
          return res.json({
            success: 0,
            message: err.message.replace("ER_SIGNAL_EXCEPTION: ", ""),
          });
        } else if (err) {
          return res.status(500).json({
            success: 0,
            message: err.message,
          });
        }

        return res.json({
          success: 1,
          results,
        });
      }
    );
  },
  get_popular: (req, res) => {
    db.query(
      `select news_id from news_count ORDER BY count DESC limit 3;`,
      [],
      (err, results) => {
        if (err && err.message.startsWith("ER_SIGNAL_EXCEPTION")) {
          return res.json({
            success: 0,
            message: err.message.replace("ER_SIGNAL_EXCEPTION: ", ""),
          });
        } else if (err) {
          return res.status(500).json({
            success: 0,
            message: err.message,
          });
        }

        return res.json({
          success: 1,
          results,
        });
      }
    );
  },
  get_latest: (req, res) => {
    db.query(
      `select news_id from news_table ORDER BY news_date DESC LIMIT 3;`,
      [],
      (err, results) => {
        if (err && err.message.startsWith("ER_SIGNAL_EXCEPTION")) {
          return res.json({
            success: 0,
            message: err.message.replace("ER_SIGNAL_EXCEPTION: ", ""),
          });
        } else if (err) {
          return res.status(500).json({
            success: 0,
            message: err.message,
          });
        }

        return res.json({
          success: 1,
          results,
        });
      }
    );
  },
  get_news_turul: (req, res) => {
    db.query(`select * from turul_table`, [], (err, results) => {
      if (err && err.message.startsWith("ER_SIGNAL_EXCEPTION")) {
        return res.json({
          success: 0,
          message: err.message.replace("ER_SIGNAL_EXCEPTION: ", ""),
        });
      } else if (err) {
        return res.status(500).json({
          success: 0,
          message: err.message,
        });
      }

      return res.json({
        success: 1,
        results,
      });
    });
  },
};
