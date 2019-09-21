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

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/movies', moviesRouter);
// chain stops here if above handler view is displayed
// -------------- ADDING HANDLER METHODS & HTTP RESPONSES ------------------------

app.use((req, res, next) => {
  console.log('ALWAYS executed middleware, even on server restart unless res.render/show or app hangs when no view rendering...');
  next(); //  !!!!!!!!!!!! it skipped here, it will hang the app
});

// catch 404 and forward to error handler (any function below in page with err as parameter)
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.locals.message = `Handler in app.js caught error: ${err.message}`;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error'); // show error page
});

// this module.exports obj is supplied to the callers of app.js (eg ./bin/www )
module.exports = app;
