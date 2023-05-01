var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require("express-session");
const passport = require("passport");
require("./config/passport")(passport);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authRouter = require("./routes/auth");
const basketsRouter = require("./routes/baskets");
const ordersRouter = require("./routes/orders");
const itemsRouter = require("./routes/items");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: "FreedomFromTheKnown",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/auth", authRouter);
app.use("/baskets", basketsRouter);
app.use("/items", itemsRouter);
app.use("/orders", ordersRouter);

module.exports = app;
