//local strategy
const localStartegy = require("passport-local");

const bcrypt = require("bcryptjs");
const User = require("./../models/User.model");
const { Passport } = require("passport");
const passport = require("passport");

module.exports = (Passport) => {
  Passport.use(
    new localStartegy({ usernameField: "email" }, (email, password, done) => {
      //match user
      User.findOne({ email })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: "this email doesn't exist" });
          } else {
            //match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) {
                throw err;
              }
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, { message: "password incorrect" });
              }
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
