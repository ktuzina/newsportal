'use strict';

const events = require('../db/models/event');

exports.findAll = function (cb){
    events.findAll().then(events => {
        cb(null, events)
    }).catch(err => {
        cb(err, null)
    })
};

exports.findById = function (id, cb){
    events.findAll({
        where:{
            id: id
        }
    }).then(events => {
        cb(null, events[0])
    }).catch(err => {
        cb(err, null)
    })
};

exports.findWithLimit = function (limit, cb){
    events.findAll({
        limit: limit,
        order: [ [ 'createdAt', 'DESC' ]]
    }).then(events => {
        cb(null, events)
    }).catch(err => {
        cb(err, null)
    })
};

exports.createEvent = function (name, startDate, place, description, picturePath, cb){
    events.create({
        name: name,
        startDate: startDate,
        place: place,
        description: description,
        picture: picturePath
    }).catch(err => {
        cb(err)
    });
    cb(null);
};