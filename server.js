const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const port = 3000;

require('dotenv').config();
require('./config/database');
require('./config/passport');

const app = express();

const indexRoutes = require('./routes/index');
const ridersRoutes = require('./routes/riders');
const motorcyclesRoutes = require('./routes/motorcycles');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRoutes);
app.use('/', ridersRoutes);
app.use('/', motorcyclesRoutes);

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});