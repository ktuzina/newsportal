'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const user = require('../db/models/user');
const userModel = require('../models/users');

const authenticationMiddleware = require('./middleware');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

function initPassport () {
    passport.use(new LocalStrategy(
        (username, password, done) => {
            userModel.findOneByEmail(username, function(err, user){
                console.log(user);
                if (!user) {
                    console.log('Incorrect username.');
                    return done(null, false, { message: 'Incorrect username.' });
                }

                if (user.password !== password) {
                    console.log('Incorrect password.');
                    return done(null, false, { message: 'Incorrect password.' });
                }
                let serUser = {name: user.name, surname: user.surname, role: user.role, email: user.email};
                return done(null, serUser);
            })
/*            user.findOne({ where: {email: username} }).then(user => {
                console.log(user);
                if (!user) {
                    console.log('Incorrect username.');
                    return done(null, false, { message: 'Incorrect username.' });
                }

                if (user.password !== password) {
                    console.log('Incorrect password.');
                    return done(null, false, { message: 'Incorrect password.' });
                }
                let serUser = {name: user.name, surname: user.surname, role: user.role, email: user.email};
                return done(null, serUser);
            })*/
        }
    ));

    passport.authenticationMiddleware = authenticationMiddleware
}

module.exports = initPassport;