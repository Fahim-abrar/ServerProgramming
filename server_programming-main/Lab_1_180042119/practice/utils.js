const HelloFunc = require("./helloWorld");

//HelloFunc.hello();
//console.log(HelloFunc.name)

//setInterval ,callback fn will continously run after 1s
setInterval(()=>{
    HelloFunc.hello();
}, 1000);

//setTimeout, after 5s callback fn will run only once
setTimeout(()=>{
    console.log(HelloFunc.name);
}, 5000);