const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.flash("error", "You do not have access!");
    res.redirect("/users/login");
  }
};
//if a user want to go to a restricted page, then his login data will be passed  
const addUserData = (req, res,next) => {
  res.locals.req = req;
  res.locals.res = res;
  next();
};
module.exports = {ensureAuthenticated,addUserData};
