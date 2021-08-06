const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const isLoggedIn=require('./../middlewares/auth.middleware')
const {getDashboard, getLogin, getRegister, postRegister} =require("./../controllers/userController.controllers")
//to read data from body, always do the same thing
router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())

router.get("/login", getLogin);

router.get("/dashboard",getDashboard);

// router.get("/register", getRegister);

// router.post("/register",isLoggedIn,postRegister);

router.route('/register').all(isLoggedIn).get(getRegister).post(postRegister)
module.exports = router;
