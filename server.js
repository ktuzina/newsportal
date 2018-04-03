'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const passport = require('passport');
const ConnectRoles = require('connect-roles');
const session = require('express-session');
const bodyParser = require('body-parser');
const db      = require('./app/db/database');
const http    = require('http');
const flash=require('express-flash');

const i18n = require('i18n');

i18n.configure({
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    cookie: 'lang',
    directory: __dirname + '/locales'
});

app.use(bodyParser.urlencoded({
    extended: false
}));

const cookieParser = require('cookie-parser');

app.use(cookieParser());


app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');

app.use(i18n.init);

require('./app/authentication').init(app);

/*app.use(session({
    store: new RedisStore({
        url: process.env.REDIS_STORE_URI
    }),
    secret: process.env.REDIS_STORE_SECRET,
    resave: false,
    saveUninitialized: false
}));*/
app.use(session({ secret: 'keyboard cat' }));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

var user = new ConnectRoles({
    failureHandler: function (req, res, action) {
        // optional function to customise code that runs when
        // user fails authorisation
        var accept = req.headers.accept || '';
        res.status(403);
        if (~accept.indexOf('html')) {
            res.render('access-denied', {action: action});
        } else {
            res.send('Access Denied - You don\'t have permission to: ' + action);
        }
    }
});

app.use(user.middleware());

user.use(function (req, action) {
    if (!req.isAuthenticated()) return action === 'is not auth';
});

user.use(function (req, action) {
    if (req.user.role === 'admin') return action === 'access admin pages';
});

//admin users can access all pages
user.use(function (req) {
    if (req.user.role === 'admin') {
        return true;
    }
});

/**
 * Expose
 */

module.exports = app;

//require('./app/user').init(app);

require('./config/routes')(app, user);

app.set('port', (process.env.PORT || 5000));
/*app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});*/

db.sequelize.sync().then(function() {
    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });
});