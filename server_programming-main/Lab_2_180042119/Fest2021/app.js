require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");

const mongoose = require("mongoose");

//passport strategy
require("./config/passport")(passport);

//db connect
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log(e);
  });

//View Engine
app.set("view engine", "ejs");

//session and flash
app.use(
  session({
    secret: "secret",
    //another flag: http
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());
app.use(passport.initialize())
app.use(passport.session())
//body parser
app.use(express.urlencoded({ extended: false }));

//Routes
const indexRoutes = require("./routes/index.routes");
const userRoutes = require("./routes/users.routes");
const MORoutes=require('./routes/mathOlympiad.routers')
const PCRoutes=require('./routes/progContest.routes')
app.use(indexRoutes);
app.use("/users", userRoutes);
app.use('/MathOlympiad',MORoutes)
app.use('/ProgContest',PCRoutes)

//Static Resources
app.use(express.static("public"));
module.exports = app;
