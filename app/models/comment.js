'use strict';

const comment = require('../db/models/comment');

exports.findByNewsId = function (newsId, cb){
    comment.findAll({
        where:{
            newsId: newsId
        }
    }).then(comments => {
        cb(null, comments)
    }).catch(err => {
        cb(err, null)
    })
};

exports.createComment = function(text, newsId, name, surname, cb){
    comment.create({
        text: text,
        newsId: newsId,
        userName: name,
        userSurname: surname
    }).then(
        cb(null)
    )

};