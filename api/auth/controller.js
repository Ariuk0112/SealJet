const jwt = require("jsonwebtoken");
const mail = require("../mail");
const empty = require("is-empty");
const md5 = require("md5");
const asyncHandler = require("../../middleware/asyncHandler");
const User = require("../../models/users");
function auth(req, res, next) {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (token == null)
    return res.status(401).json({
      success: 0,
      message: "token is null",
    });

  jwt.verify(token, process.env.SECRET, (err, data) => {
    if (err)
      return res.status(401).json({
        success: 0,
        message: err.message,
      });

    req.data = data;
    next();
  });
}

module.exports = {
  auth: auth,
  check: (req, res) => {
    res.json({
      success: 1,
      data: req.data,
    });
  },

  createAccount: asyncHandler(async (req, res) => {
    let user = req.body;
    console.log(user);
    console.log("Username", user.username);
    user.password = md5(user.password);
    let item = await new User({
      ...user,
    }).save();
    const accessToken = jwt.sign(
      {
        username: req.body.username,
      },
      process.env.SECRET,
      process.env.EXRPIRE
    );

    console.log(`Creating account for ${req.body.username}`);

    return res.json({
      success: 1,
      username: req.body.username,
      user_id: item._id,
      accessToken: accessToken,
    });
  }),
  login: asyncHandler(async (req, res) => {
    let { username, password, building } = req.body;
    if (empty(username) || empty(password))
      throw new Error("Хэрэглэгчийн нэр эсвэл утасны дугаараа оруулна уу.!!!");
    password = md5(password);
    let item = await User.findOne({ username, password, building }).lean();
    if (!item)
      return res.json({
        success: false,
        message: "Хэрэглэгчийн нэр эсвэл нууц үг буруу байна",
      });
    const accessToken = jwt.sign(
      {
        user_id: item._id,
        role: item.role,
      },
      process.env.SECRET,
      process.env.EXRPIRE
    );
    return res.json({
      success: true,
      user_id: item._id,
      role: item.role,
      accessToken: accessToken,
    });
  }),

  show: asyncHandler(async (req, res) => {
    let item = await User.find().lean();
    if (!item)
      return res.json({ success: false, message: "Мэдээлэл олдсонгүй.!" });
    return res.json({
      success: true,
      data: item,
    });
  }),
  update: asyncHandler(async (req, res) => {
    let user = req.body;
    user.password = md5(req.body.password);
    let item = await User.findById(req.params.id).lean();
    if (!item)
      return res.json({ success: false, message: "Мэдээлэл олдсонгүй.!" });
    let vol = await User.findByIdAndUpdate(req.params.id, user);
    return res.json({
      success: true,
      data: vol,
    });
  }),
  delete_user: asyncHandler(async (req, res) => {
    let item = await User.findById(req.params.id).lean();
    if (!item)
      return res.json({ success: false, message: "Мэдээлэл олдсонгүй.!" });
    let vol = await User.findByIdAndDelete(req.params.id);
    return res.json({
      success: true,
      data: vol,
    });
  }),
  resetPassword: (req, res) => {
    db.query(
      "call sp_resetPassword(?)",
      [req.body.username],
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

        // And now we should send new password to user
        console.log(
          `New password for ${req.body.username} => ${results[0][0].newPassword}`
        );

        // email?
        mail.sendMail({
          title: "New password",
          to: req.body.username,
          htmlPath: "password-reset.html",
          replacements: {
            username: results[0][0].acc_fname,
            newpassword: results[0][0].newPassword,
          },
        });

        return res.json({
          success: 1,
        });
      }
    );
  },
  changePassword: (req, res) => {
    db.query(
      "call sp_changepass(?,?,?)",
      [req.data.username, req.body.oldPassword, req.body.newPassword],
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
        });
      }
    );
  },
};
