// "use strict";

const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const exphbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  expressSession({
    secret: process.env.secret || "secret",
    saveUninitialized: false,
    resave: false
  })
);


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set("view engine", "handlebars");

app.use(passport.initialize());
app.use(passport.session());

const userObj = {
  name: "admin",
  _password: "admin"
};

const hashPass = function(value) {
  return bcrypt.hashSync(value, 12);
};

userObj.hashedPassword = hashPass(userObj._password)

const validPassword = function(password) {
  return bcrypt.compareSync(password, userObj.hashedPassword);
};

// const loginMiddleware = (req, res, next) => {
//   const username = req.username;

//   if (!sessionId) return next();
// }

const loggedInOnly = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.redirect("/login")
  }
};

const loggedOutOnly = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    return res.redirect("/")
  }
};


const local = new LocalStrategy((username, password, done) => {
      if (username != userObj.name) {
        return done(null, false, {message: "Username not found"});
      }
      if (!validPassword(password)) {
        return done(null, false, {message: "Password Incorrect"});
      }
      return done(null, userObj)
    });


passport.use("local", local);

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(userId, done) {
  // no db, no find ById
  User.findById(userId, (err, user) => done(err, user));
});

app.get("/", loggedInOnly, (req, res) => {
  // if (req.user) {
    res.render("home", user);
  // } else {
  //   res.redirect("/login");
  // }
});

app.get("/login", loggedOutOnly, (req, res) => {
  // if (req.user) {
    res.render("login");
  // } else {
  //   res.redirect("/");
  // }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

app.post("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});


// Your code here...

app.listen(4000, () => {
  console.log('Application listening on port 4000!')
})
