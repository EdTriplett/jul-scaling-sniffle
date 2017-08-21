const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const exphbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const app = express();

// Your code here...

app.listen(4000, () => console.log('Application listening on port 4000!'));
