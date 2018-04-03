'use strict';

const multer  = require('multer');
const newsModel = require('../models/news');
const sectionModel = require('../models/section');
const eventModel = require('../models/events');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public')
    },
    filename: function (req, file, cb) {
        cb(null,  Date.now() +  '-'  +file.originalname )
    }
});

const upload = multer({ storage: storage }).single('picture');

exports.createArticle = function(req, res){
    console.log('createArticle');
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            // An error occurred when uploading
            return;
        }

        let sectionId = req.body.section;
        let title = req.body.title;
        let summary = req.body.summary;
        let description = req.body.description;
        let picture = req.file.filename;

        newsModel.createNews(sectionId,title,summary,description,picture, function(err){
           if(err){
               console.log(err);
               res.status(500).send(err);
           }
            res.redirect('/');
        });

/*        database.News.create({
            sectionId: req.body.section,
            title: req.body.title,
            summary: req.body.summary,
            description: req.body.description,
            picture: req.file.filename
        }).catch(msg => console.log(msg));
        res.redirect('/');*/

    });
};


exports.showCreateArticlePage = function(req, res){
    sectionModel.findAll(function(err, sections){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        res.render('admin/create_article',{
            sections: sections
        });
    })
/*    database.Section.findAll()
        .then(sections =>{
            res.render('admin/create_article',{
                sections: sections
            });
        });*/

};

exports.createEvent = function(req, res){
    console.log('createEvent');
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            // An error occurred when uploading
            return;
        }

        let name = req.body.name;
        let startDate = req.body.startDate;
        let place = req.body.place;
        let description = req.body.description;
        let picture = req.file.filename;

        eventModel.createEvent(name,startDate,place,description,picture, function(err){
            if(err){
                console.log(err);
                res.status(500).send(err);
            }
            res.redirect('/');
        });

/*        database.Event.create({
            name: req.body.name,
            startDate: req.body.startDate,
            place: req.body.place,
            description: req.body.description,
            picture: req.file.filename
        }).catch(msg => console.log(msg));
        res.redirect('/');*/

    });
};


exports.showCreateEventPage = function(req, res){
    res.render('admin/create_event');
};