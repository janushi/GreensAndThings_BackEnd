// kiran pandya
// 500 600 grms
// 5 dry 5 crunch
// 10 no batvo

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');

var index = require('./routes/index');

var user  = require('./routes/user');

// var city  = require('./routes/city');
// var project_emp = require('./routes/project_emp');
// var manage_appoint = require('./routes/manage_appoint');
// var notification = require('./routes/notification');
// var state = require('./routes/state');
// var project_table = require('./routes/project_table');
// var slot = require('./routes/slot');
// var working_area = require('./routes/working_area');
 var user = require('./routes/user');
// var manager_user = require('./routes/manager_user');
// var task = require('./routes/task');
// var allocate_slot_to_employee = require('./routes/allocate_slot_to_employee');
// var starting_slot = require('./routes/starting_slot');
// var delete_slot = require('./routes/delete_slot');
// var delete_select_slot = require('./routes/delete_select_slot');
// var manager_login_check = require('./routes/manager_login_check');
 var seller_login_check = require('./routes/seller_login_check');
var category = require('./routes/category');
var sellercategorymapping = require('./routes/sellercategorymapping');
var sellercategorymapping1 = require('./routes/sellercategorymapping1');
var order = require('./routes/order');
var order1 = require('./routes/order1');
var sellerproductdetail = require('./routes/sellerproductdetail');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({ limit:'50mb',extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/user', user);

// app.use('/city', city);
// app.use('/project_emp', project_emp);
// app.use('/manage_appoint', manage_appoint);
// app.use('/notification', notification);
// app.use('/working_area', working_area);
// app.use('/state', state);
// app.use('/project_table',project_table);
// app.use('/slot', slot);
 app.use('/user', user);
// app.use('/manager_user', manager_user);
// app.use('/task', task);
// app.use('/allocate_slot_to_employee', allocate_slot_to_employee);
// app.use('/starting_slot', starting_slot);
// app.use('/delete_slot',delete_slot);
// app.use('/delete_select_slot', delete_select_slot);
// app.use('/manager_login_check', manager_login_check);
 app.use('/seller_login_check', seller_login_check);
app.use('/category', category);
app.use('/sellercategorymapping', sellercategorymapping);
app.use('/sellercategorymapping1', sellercategorymapping1);
app.use('/order', order);
app.use('/order1', order1);
app.use('/sellerproductdetail', sellerproductdetail);
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

module.exports = app;
