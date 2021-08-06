const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.write("<h1>This is the base URL.</h1>");
        res.end();
    } 
    else if (req.url == "/home") {
        res.write("<h1>This is Home Page.</h1>");
        res.end();
    } else {
        res.write("<h1>Non-existent Page.</h1><br><a href = '/'>Go to Base</a>");
        res.end();
    } 





    //  //   console.log(req)
   
//  res.writeHead(201,{"Content-Type":"text/html"})
//  res.write("<h1>hi<h1>")
//     res.end()
})

// server.listen(2119)

module.exports = { server };