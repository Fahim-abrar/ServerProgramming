var LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./scratch");
const alert = require("alert");

const isLoggedin = (req, res, next) => {
  const userName = localStorage.getItem("name");

  if (userName) {
    // res.sendFile("index3.html", { root: "./views" },{userName="kcde"});
    alert(`Username: ${userName}`);
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = isLoggedin;
