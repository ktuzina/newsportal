'use strict';

const section = require('../db/models/section');

exports.findById = function(id, cb){
  section.findAll({
      where:{
          id:id
      }
  }).then(sections =>{
        cb(null,sections[0])

  }) .catch(err =>{
      cb(err, null);
  })
};

exports.findAll = function(cb){
    section.findAll()
        .then(sections =>{
            cb(null, sections)
        }).catch(err =>{
            cb(err,null)
    })
};