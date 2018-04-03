'use strict';

/**
 * Module dependencies.
 */
const dateFormat = require('dateformat');
const user = require('../db/models/user');
const eventModel = require('../models/events');
const newsModel = require('../models/news');

exports.useDB = function (req, res){
    user.findAll().then(users => {
        res.render('pages/db', {
            results: users
        });
    })
};


exports.showArticle = function (req, res){
    console.log("id - "+ req.query.id);
    let id = req.query.id;
    newsModel.findById(id, function(err, news){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        res.render('pages/article', {
            title: 'shops',
            news: news,
            dateFormat: dateFormat
        });
    })
};


/**
 * Index page
 */

exports.showIndexPage = function (req, res){
    eventModel.findWithLimit(4, function(err, events){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        newsModel.findWithLimit(3, function(err, news){
            if(err){
                console.log(err);
                res.status(500).send(err);
            }
            res.render('pages/index', {
                title: 'Index',
                events: events,
                news: news,
                dateFormat: dateFormat
            });
        });
    });

};

/**
 * event
 */

exports.showEvent = function (req, res){
    let id = req.query.id;

    eventModel.findById(id, function(err, event){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        res.render('pages/event', {
            title: 'event',
            dateFormat: dateFormat,
            event: event
        });
    });
};

/**
 * shop
 */

exports.showShop = function (req, res){
    res.render('pages/shop', {
        title: 'shop'
    });
};

/**
 * shops
 */

exports.showShops = function (req, res){
    res.render('pages/shops', {
        title: 'shop'
    });
};

/**
 * sub Menu
 */

exports.showSubMenu = function (req, res){
    res.render('pages/subMenu', {
        title: 'subMenu'
    });
};

/**
 * add company
 */

exports.showAddCompany = function (req, res){
    res.render('user/add_company', {
        title: 'add_company'
    });
};

/**
 * auto
 */

exports.showAuto = function (req, res){
    let sectionId = 6;
    newsModel.findBySectionId(sectionId, function(err,news){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        res.render('pages/news', {
            title: 'Auto',
            section: 'Авто',
            dateFormat: dateFormat,
            news: news
        });
    });
/*    news.findAll({
        where: {
            sectionId: 6
        }
    }).then(news =>{
        res.render('pages/news', {
            title: 'Auto',
            section: 'Авто',
            news: news
        });
    });*/
};

/**
 * technology
 */

exports.showTechnology = function (req, res){
    let sectionId = 1;
    newsModel.findBySectionId(sectionId, function(err,news){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        res.render('pages/news', {
            title: 'technology',
            section: 'Технологии',
            dateFormat: dateFormat,
            news: news
        });
    });
};

/**
 * people
 */

exports.showPeople = function (req, res){
    let sectionId = 2;
    newsModel.findBySectionId(sectionId, function(err,news){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        res.render('pages/news', {
            title: 'people',
            section: 'Люди',
            dateFormat: dateFormat,
            news: news
        });
    });
/*    news.findAll({
        where: {
            sectionId: 2
        }
    }).then(news =>{
        res.render('pages/news', {
            title: 'people',
            section: 'Люди',
            news: news
        });
    });*/
};

/**
 * finance
 */

exports.showFinance = function (req, res){
    let sectionId = 3;
    newsModel.findBySectionId(sectionId, function(err,news){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        res.render('pages/news', {
            title: 'finance',
            section: 'Финансы',
            dateFormat: dateFormat,
            news: news
        });
    });
/*    news.findAll({
        where: {
            sectionId: 3
        }
    }).then(news =>{
        res.render('pages/news', {
            title: 'finance',
            section: 'Финансы',
            news: news
        });
    });*/
};

/**
 * sport
 */

exports.showSport = function (req, res){
    let sectionId = 4;
    newsModel.findBySectionId(sectionId, function(err,news){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        res.render('pages/news', {
            title: 'sport',
            section: 'Спорт',
            dateFormat: dateFormat,
            news: news
        });
    });
/*    news.findAll({
        where: {
            sectionId: 4
        }
    }).then(news =>{
        res.render('pages/news', {
            title: 'sport',
            section: 'Спорт',
            news: news
        });
    });*/
};

/**
 * realty
 */

exports.showRealty = function (req, res){
    let sectionId = 5;
    newsModel.findBySectionId(sectionId, function(err,news){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        res.render('pages/news', {
            title: 'realty',
            section: 'Недвижимость',
            dateFormat: dateFormat,
            news: news
        });
    });
/*    news.findAll({
        where: {
            sectionId: 5
        }
    }).then(news =>{
        res.render('pages/news', {
            title: 'realty',
            section: 'Недвижимость',
            news: news
        });
    });*/
};

/**
 * events
 */

exports.showEvents = function (req, res){
    eventModel.findAll(function(err, events){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        res.render('pages/events', {
            title: 'Events',
            dateFormat: dateFormat,
            events: events
        });
    });
};

/**
 * change language to English
 */

exports.changeLanguageToEnglish = function (req, res){
    res.cookie('lang', 'en');
    res.redirect('/');
};

/**
 * change language to Russian
 */

exports.changeLanguageToRussian = function (req, res){
    res.cookie('lang', 'ru');
    res.redirect('/');
};