const logger=(req,res,next)=>{
    const method=req.method
    const url=req.url
    const date=new Date().getFullYear().toString()
// req.name="asd"
    console.log(method,url,date)
    //if we don't call next() we can't get to the nexr part of the code. we can also apply conditions
    next()
}
const printSomething=(req,res,next)=>{
    console.log("ss")
    next()
}

module.exports={logger,printSomething}