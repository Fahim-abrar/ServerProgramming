const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");

router.use(cookie())
const {
  getRegister,
  getLogin,
  postRegister,
  postLogin,
  getDashboard,
} = require("../../task/controllers/userController.controllers");
const isLoggedin = require("../middlewares/auth.middleware");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/register", getRegister);
router.post("/register", postRegister);

router.get(`/dashboard`, isLoggedin, getDashboard);
module.exports = router;
