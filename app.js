var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dbs;
var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://rachna1711:rachna1711@ds153392.mlab.com:53392/tbc',function(err,client){
  if(err)throw err;
  var db=client.db('tbc');
  db.collection('User').find({}).toArray(function(err,db){
    console.log(db);
  })
})
var mongoose=require('mongoose');
var url="mongodb://rachna1711:rachna1711@ds153392.mlab.com:53392/tbc";
mongoose.connect(url,function(err,suc){
  if(err)console.log("Error");
  console.log("Succesfully Connected");
});


var index = require('./routes/index');
var users = require('./routes/register');
var login=require('./routes/login');
var host=3000;
var hostname="localhost"
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/register', users);
app.use('/login', login);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
app.listen(host,hostname,function(){
  console.log(host);

})
module.exports = app;
