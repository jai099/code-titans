const express = require("express");
const {
  registerUser,
  loginUser,
  isLogin,
  getUserDetails,
} = require("../controllers/UserControls");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/isLogin").get(isAuthenticated, isLogin);

router.route("/user").get(isAuthenticated, getUserDetails);

module.exports = router;