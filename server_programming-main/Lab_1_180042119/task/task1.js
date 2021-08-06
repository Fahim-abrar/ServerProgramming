const http = require("http")
const lc = require("./loadContent")
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end(lc.index)
    }
    else if (req.url == "/about") {
        res.end(lc.about)
    }
    else if (req.url == "/blog") {
        res.end(lc.blog)
    } else if (req.url == "/contact") {
        res.end(lc.contact)
    } else if (req.url == "/pricing") {
        res.end(lc.price)
    } else if (req.url == "/services") {
        res.end(lc.service)
    }
    else if (req.url == "/work") {
        res.end(lc.work)
    } else {
        res.end("<h1>page doesn't exist</h1>")
    }
})

module.exports={server}