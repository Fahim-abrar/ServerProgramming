const isLoggedin=(req,res,next)=>{
    if(req.method=="POST"){
        const name=req.body.uname;
        const email=req.body.mail
        const password=req.body.psw  //psw came from html : name
   
        if(name=='admin'){
            next();
        }
    else{
        res.redirect("/users/register");
    }
    }
   
else{
   next();
}}

module.exports=isLoggedin