var createError = require('http-errors');
var HttpStatusCodes = require('http-status-codes');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var methodOverride = require('method-override');
var multer = require('multer');
var session = require('express-session');
var passport = require('passport');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({
  storage: storage
});

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');

// connect to passport middleware
require('./config/passport');

var indexRouter = require('./routes');
var profileRouter = require('./routes/profile');
var libraryBarRouter = require('./routes/libraryBar');
var aboutRouter = require('./routes/about');
var utilityRouter = require('./routes/utility/auth');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware method-override
app.use(function (req, res, next) {
  console.log('Hello SEI!');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(methodOverride('_method'));
app.use(express.static("public"));

app.use(session({
  secret: 'THEsecret!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

//* mounted routes *//

// preloader: redirect
app.use('/', indexRouter);
// profile: edit and update
app.use('/profile', profileRouter);
// CRUD: cocktails
app.use('/libraryBar', libraryBarRouter);
// about: cocktails
app.use('/about', aboutRouter);
// Authorization: sign up, Log in
app.use('/account', utilityRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;