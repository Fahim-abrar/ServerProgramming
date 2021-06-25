
const http = require('http');

const contents = require('./loadContents');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    //res.writeHead(201,{"Content-Type": "text/html"}) ;
    res.write(contents.index);
    res.end();
  } else if (req.url == '/blog') {
    res.write(contents.blog);
    res.end();
  } else if (req.url == '/about') {
    res.write(contents.about);
    res.end();
  } else if (req.url == '/contact') {
    res.write(contents.contact);
    res.end();
  } else if (req.url == '/pricing') {
    res.write(contents.pricing);
    res.end();
  } else if (req.url == '/services') {
    res.write(contents.services);
    res.end();
  } else if (req.url == '/work') {
    res.write(contents.work);
    res.end();
  } else {
    res.write(`<h1>This dont exist url</h1><a href='/'>Base</a>`);
    res.end();
  }
});

module.exports = { server };