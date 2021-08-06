const express = require("express");
const router=express.Router()

const {getLogin, postLogin, getRegister, postRegister} =require('./../controllers/users.controllers')

router.get('/login',getLogin)
router.post('/login',postLogin)
router.get('/register',getRegister)
router.post('/register',postRegister)
router.get('/logout',(req,res)=>{
req.logout()
res.redirect("/")
})
module.exports = router;
