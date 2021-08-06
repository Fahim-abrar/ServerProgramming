const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
var LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./scratch");
const alert = require("alert");

const getRegister = (req, res) => {
  res.sendFile("register.html", { root: "./views/pages/examples" });
};

const postRegister = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.pass;
  const re_pass = req.body.re_pass;

  try {
    userExist = await User.findOne({ email });
    if (userExist) {
      alert("There is already an account under that email.");
      res.redirect("/register");
    } else if (String(password).length < 6) {
      alert("Please enter a password of at least 6 characters.");
      res.redirect("/register");
    } else if (!(password == re_pass)) {
      alert("Please enter the same password twice.");
      res.redirect("/register");
    } else {
      const salt = await bcrypt.genSaltSync(10);
      passwordHash = await bcrypt.hash(password, salt);
      // console.log(passwordHash);
      user = new User({
        name,
        email,
        passwordHash,
      });
      const savedUser = await user.save();
      localStorage.setItem("name", name);
      res.cookie("name", name);
      res.redirect("/dashboard");
    }
  } catch (error) {
    console.error(error.message);
    alert("Please enter all required fields.");
    res.redirect("/register");
  }
};

const getLogin = (req, res) => {
  res.sendFile("login.html", { root: "./views/pages/examples" });
};

const postLogin = async (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const passMatch = await bcrypt.compare(pass, existingUser.passwordHash);
    if (passMatch) {
      localStorage.setItem("name", existingUser.name);
      res.cookie("name", existingUser.name);

      res.redirect(`/dashboard`);
    } else {
      alert("Wrong Password");
      res.redirect("/login");
    }
  } else {
    alert("You are not registered\nPlease create an account");
    res.redirect("/login");
  }
};

const getDashboard = (req, res) => {
  res.sendFile("index3.html", { root: "./views" });
};

module.exports = {
  getLogin,
  getRegister,
  postRegister,
  postLogin,
  getDashboard,
};
