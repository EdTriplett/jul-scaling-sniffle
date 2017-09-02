//Require modules
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const exphbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const app = express();


//Mount middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  expressSession({
    secret: process.env.secret || "secret",
    saveUninitialized: false,
    resave: false
  })
);

app.engine('handlebars', exphbs());
app.set("view engine", "handlebars");

app.use(passport.initialize());
app.use(passport.session());

//Hard-code user
const userObj = {
  name: "admin",
  _password: "admin"
};

//Hash hardcoded password 
const hashPass = function(value) {
  return bcrypt.hashSync(value, 12);
};
//store result
userObj.hashedPassword = hashPass(userObj._password)

//helper fxn using only hashed version of the hard-coded password
const validPassword = function(password) {
  return bcrypt.compareSync(password, userObj.hashedPassword);
};

// Middlewares for checking login/logout and protecting routes
const loggedInOnly = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.redirect("/login")
  }
};

const loggedOutOnly = (req, res, next) => {
  if (req.isUnauthenticated()) {
    next();
  } else {
    return res.redirect("/")
  }
};

// De/serialize user
passport.serializeUser(function(user, done) {
  done(null, userObj);
});

passport.deserializeUser(function(user, done) {
  done(null, userObj);
});

// Create the local strategy
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

// Routes
app.get("/", loggedInOnly, (req, res) => {
    res.render("home", {user:userObj});
});

app.get("/login", loggedOutOnly, (req, res) => {
    res.render("login");
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

//begin server
app.listen(4000, () => {
  console.log('Application listening on port 4000!')
})
