const User = require('../models/userModel.model');

const  getLoginPage =(req,res) => {
    res.sendFile('login.html', {root: './views/pages/examples'});
};

const  getRegisterPage =(req,res) => {
    res.sendFile('register.html', {root: './views/pages/examples'});
};

const postRegister= (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    if(password.length<6 || !name || !email){
       return res.json({message:"Registration failed" });
    }
    res.json({ message: 'registration success'});
};

const postRegister =(req,req)=>{
    const name = req.body.name;
    const email=req.body.email;
    const password = req.body.password;
    const retype = req.body.retype;

}

module.exports ={
    getLoginPage,
    getRegisterPage,
    postRegister,
};