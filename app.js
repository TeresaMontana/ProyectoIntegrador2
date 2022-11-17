var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var postsRouter = require('./routes/posts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//middleware: app.(use) que se ejecuta en cada re y res
// creamos la config antes de las rutas. session es una configuracion que tiene middleware

app.use(session({
  secret: 'miApp', //esto se hashea creando un identificador unico. por encima de las rutas 
  resave: false, //ayuda a conservar la sesion
  saveUninitialized: true 
}));

/* nota: Crear middleware de locals aca. middleware: */
app.use(function(req, res, next) {
  /* logica. si el usuario esta logueado quiero que se fuarde en locals, si no pasa al sifuiente middleware que es de cookies ..*/
  if(req.session.user != undefined) {
      res.locals.user = req.session.user;
  }

  return next();
}); 

/* Middleware de cookies*/

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/posts',postsRouter);

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

