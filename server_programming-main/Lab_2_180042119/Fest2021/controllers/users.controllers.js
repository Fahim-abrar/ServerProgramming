const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const getLogin = (req, res) => {
  res.render("users/login.ejs", { error: req.flash("error") });
};

const postLogin = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true,
  })(req, res, next);
};

const getRegister = (req, res) => {
  res.render("users/register.ejs", { errors: req.flash("errors") });
};

const postRegister = (req, res) => {
  const { name, email, password, confirm_password } = req.body;

  //data validation
  const errors = [];
  if (!name || !email || !password || !confirm_password) {
    errors.push("fill up all the fields");
  }
  if (password.length < 6) {
    errors.push("password must be at least 6 characters");
  }
  if (password !== confirm_password) {
    errors.push("password doesn't match");
  }
  if (errors.length > 0) {
    req.flash("errors", errors);

    res.redirect("/users/register");
  } else {
    //create new user
    User.findOne({ email }).then((user) => {
      if (user) {
        errors.push("this email is already registered");
        req.flash("errors", errors);
        res.redirect("/users/register");
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            errors.push(err);
            req.flash("errors", errors);
            res.redirect("/users/register");
          } else {
            bcrypt.hash(password, salt, (err, hash) => {
              if (err) {
                errors.push(err);
                req.flash("errors", errors);
                res.redirect("/users/register");
              } else {
                const newUser = new User({
                  name,
                  email,
                  password: hash,
                });
                newUser
                  .save()
                  .then(() => {
                    res.redirect("/users/login");
                  })
                  .catch(() => {
                    errors.push("user regisration failed!");
                    req.flash("errors", errors);
                    res.redirect("/users/register");
                  });
              }
            });
          }
        });
      }
    });
    // // res.redirect('/users/login')
  }
};

module.exports = { getLogin, postLogin, getRegister, postRegister };
