const User = require('../models/userModel.model');
const bcrypt = require('bcryptjs');
cosnt alert = require('alert');

const  getLoginPage =(req,res) => {
    res.sendFile('login.html', {root: './views/pages/examples'});
};

const  getRegisterPage =(req,res) => {
    res.sendFile('register.html', {root: './views/pages/examples'});
};

const postRegister= async (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const retype = req.body.retype;
    
    try{
        const user = await User.findOne ({ email });


        if(user){
            alert("There is already an user under that email.");
            re.redirect('/login');
        }
        else if(password.length < 6) {
            alert("Password must be at least 6 characters.");
            res.redirecct('/register');
        }
        else if(password!==retype){
            alert("Please enter the same password twice.");
            res.redirect('/register');
        }
        else if (!name || !email) {
            alert('please fill the form.');
            res.redirect('/register');
        }
        else{
            const salt = await bcrypt.genSaltsync(10);
            const passwordHash = await bcypt.hash(password, salt);
            const createUser = new User({ 
                 name,
                 email,
                 passwordHash,
            });
            await createUser.save();
            alert('Successfully created .');
            res.redirect('/login');
        }



    }
     catch (error){
          console .error(error);
          alert('Something went wrong');
          res.reddirect('/register');
     }
};


module.exports ={
    getLoginPage,
    getRegisterPage,
    postRegister,
};