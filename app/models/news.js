'use strict';

const commentModel = require('./comment');
const news = require('../db/models/news');
const sectionModel = require('./section');

exports.findById = function (id, cb){
    news.findAll({
        where: {
            id: id
        }})
        .then(news => {
            commentModel.findByNewsId(news[0].id, function (err, comments) {
                if (err) {
                    cb(err, null);
                }
                sectionModel.findById(news[0].sectionId, function(err, section){
                    if(err){
                        cb(err,null);
                    }
                    cb(null,{
                        article: news[0],
                        comments: comments,
                        section: section
                })
            })
        })
    }).catch(err => {
        cb(err, null)

    })
};


exports.findWithLimit = function (limit, cb){
    news.findAll({
        limit: limit,
        order: [ [ 'createdAt', 'DESC' ]]
    }).then(news => {
        cb(null, news)
    }).catch(err => {
        cb(err, null)
    })
};

exports.findBySectionId = function (sectionId, cb){
    news.findAll({
        where: {
            sectionId: sectionId
        }
    }).then(news => {
        cb(null, news)
    }).catch(err => {
        cb(err, null)
    })
};

exports.createNews = function (sectionId, title, summary, description, picturePath, cb){
    news.create({
        sectionId: sectionId,
        title: title,
        summary: summary,
        description: description,
        picture: picturePath
    }).catch(err => {
        cb(err)
    });
    cb(null);
};