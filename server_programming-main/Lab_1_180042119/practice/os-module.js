// https://nodejs.org/api/os.html

const os = require('os');

//console.log(os.userInfo());

const up=os.uptime();
console.log(up);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);