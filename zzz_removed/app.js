/* eslint-disable no-console */
/* eslint-disable max-len */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//  import modules from /routes dir
const indexRouter = require('./routes/index');
const moviesRouter = require('./routes/movies');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// add middleware libs into the request handling chain
// express middleware signature: function(req,res,next) where next is next function
app.use((req, res, next) => {
  // when (err, req, res, next) will be understood as error handling middleware = will caych any errors
  console.log('\n\nALWAYS executed middleware, even on server restart...');
  // next() or next(err) if error is declare as argument in signature-> goes to next middleware
  next(); //  !!!!!!!!!!!! it skipped here, it will hang the app
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// added to the request handling chain
app.use('/', indexRouter);
app.use('/movies', moviesRouter);

// -------------------------------------- ADDING HANDLER METHODS & HTTP RESPONSEs

// catch 404 and forward to error handler (any function below with err as parameter)
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error'); // flow goes to error page
});

// this module.exports obj is supplied to the callers of app.js (eg ./bin/www )
module.exports = app;
