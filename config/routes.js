'use strict';

/*
 * Module dependencies.
 */

const controller = require('../app/controllers/controller');
const userController = require('../app/controllers/userController');
const adminController = require('../app/controllers/adminController');

const passport = require('passport');
/**
 * Expose routes
 */

module.exports = function (app, user) {

    // routes
    app.get('/', controller.showIndexPage);
    app.get('/add-company', controller.showAddCompany);
    app.get('/auto', controller.showAuto);
    app.get('/technology', controller.showTechnology);
    app.get('/people', controller.showPeople);
    app.get('/finance', controller.showFinance);
    app.get('/sport', controller.showSport);
    app.get('/realty', controller.showRealty);
    app.get('/events', controller.showEvents);
    app.get('/event', controller.showEvent);
    app.get('/shop', controller.showShop);
    app.get('/shops', controller.showShops);
    app.get('/subMenu', controller.showSubMenu);
    app.get('/db', passport.authenticationMiddleware(), controller.useDB);
    app.get('/article', controller.showArticle);

    // change locales
    app.get('/en', controller.changeLanguageToEnglish);
    app.get('/ru', controller.changeLanguageToRussian);

    // user routes
    app.get('/login', userController.renderLoginPage);
    app.get('/profile', passport.authenticationMiddleware(), userController.renderProfile);
    app.post('/login', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));
    app.post('/sign-up', userController.signUpUser);
    app.get('/logout', userController.logout);
    app.get('/sign-up', userController.showSignUpPage);
    app.post('/create-comment', userController.createComment);

    //admin routes
    app.get('/admin/create-article', adminController.showCreateArticlePage);
    app.post('/admin/create-article', adminController.createArticle);
    app.get('/admin/create-event', adminController.showCreateEventPage);
    app.post('/admin/create-event', adminController.createEvent);

    /**
     * Error handling
     */

    app.use(function(req, res, next){
        res.status(404);

        // respond with html page
        if (req.accepts('html')) {
            res.render('pages/404', { url: req.url });
            return;
        }

        // respond with json
        if (req.accepts('json')) {
            res.send({ error: 'Not found' });
            return;
        }

        // default to plain-text. send()
        res.type('txt').send('Not found');
    });

    app.use(function(req, res, next){
        res.status(500);

        // respond with html page
        if (req.accepts('html')) {
            res.render('pages/500', { url: req.url });
            return;
        }

        // respond with json
        if (req.accepts('json')) {
            res.send({ error: 'Not found' });
            return;
        }

        // default to plain-text. send()
        res.type('txt').send('Not found');
    });
};