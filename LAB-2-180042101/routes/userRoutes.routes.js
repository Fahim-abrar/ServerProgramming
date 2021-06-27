const express = require('express');
const router = express.Router();
const userController= require('../controller/userController.controller');


router.get('/login', userController.getLoginpage);

module.exports = router;