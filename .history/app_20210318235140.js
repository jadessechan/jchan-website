var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var indexRouter = require('./routes/index');
var yelpcampRouter = require('./routes/yelpcamp');
var neuralnetworkRouter = require('./routes/neuralnetwork');
var textpredictionRouter = require('./routes/textprediction');



var app = express();

// Change Global Variables for Header and Footer Here
app.locals.globalTitle = "Jadesse Chan";
app.locals.globalCSS = '/stylesheets/style.css';
app.locals.globalJS = '/javascripts/index.js';


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/yelpcamp', yelpcampRouter);
app.use('/neuralnetwork', neuralnetworkRouter);
app.use('/textprediction', textpredictionRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;