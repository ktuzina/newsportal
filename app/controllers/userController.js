'use strict';

const userModel = require('../models/users');
const commentModel = require('../models/comment');

exports.signUpUser = function (req, res){
    let name = req.body.name;
    let surname = req.body.surname;
    let email = req.body.email;
    let password = req.body.password;

    userModel.createUser(name, surname, email, password, function(err){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        res.redirect('/');
    });
/*    user.create({
        name: name,
        surname: surname,
        role: 'user',
        email: email,
        password: password
    });
    res.redirect('/');*/

};

exports.renderLoginPage = function (req, res){
    res.render('user/login')
};

exports.renderProfile = function (req, res){
    res.render('user/profile', {
        username: req.user.username
    });
};

exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

exports.showSignUpPage = function (req, res){
    res.render('user/sign_up')
};

exports.createComment = function (req, res){
    let text = req.body.comment;
    let newsId = req.body.newsId;
    let userName = req.user.name;
    let userSurname = req.user.surname;
    console.log(userName + " " + userSurname);

    commentModel.createComment(text, newsId,userName, userSurname, function(err){
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        res.redirect('/article?id=' + newsId);
    });
/*    comment.create({
        text: text,
        newsId: newsId,
        userName : req.user.name,
        userSurname: req.user.surname
    });

    res.redirect('/article?id=' + newsId);*/
};