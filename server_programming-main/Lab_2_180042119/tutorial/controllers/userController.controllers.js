const getRegister = (req, res) => {
  res.sendFile("register.html", { root: "./views/users" });
};

const postRegister = (req, res) => {
      //  const name=req.body.uname;
  //  const email=req.body.mail
  //  const password=req.body.psw  //psw came from html : name

  //  res.send("email: " + email + ", username: " + name +", password: " + password + " says hi")
  //   // res.sendFile("register.html", { root: "./views/users" });

  res.redirect("/users/dashboard");
};

const getLogin = (req, res) => {
  const { id, name } = req.params;
  res.send(id + "  " + name + " says hi");
};

const getDashboard = (req, res) => {
  res.send("user Dashboard");
};

module.exports = { getDashboard, getLogin, getRegister, postRegister };
