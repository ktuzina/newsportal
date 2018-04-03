'use strict';

const user = require('../db/models/user');

exports.createUser = function(name, surname, email, password, cb){
    console.log('fawfawfaw');
    console.log(name + " " + surname + " " + email + " " + password);
    user.create({
        name: name,
        surname: surname,
        role: 'user',
        email: email,
        password: password
    }).then(
        cb(null)
    )

};

exports.findOneByEmail = function(email, cb){
    user.findOne({
        where: {
            email: email
        } })
        .then(user=>{
            cb(null,user)
    }).catch(err=>{
        cb(err,null)
    })
};
