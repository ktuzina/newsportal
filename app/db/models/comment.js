'use strict';

const database = require('../database');
/*const user = require('./user');*/

const Comment = database.sequelize.define('comment',{
    id:{
        type: database.Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    userName: {
        type: database.Sequelize.DataTypes.STRING
    },
    userSurname: {
        type: database.Sequelize.DataTypes.STRING
    },
    text: {
        type: database.Sequelize.DataTypes.STRING
    },
    newsId: {
        type: database.Sequelize.DataTypes.INTEGER
    }
});

// force: true will drop the table if it already exists
//Comment.hasOne(user);
//Comment.user = Comment.belongsTo(user, {foreignKey: 'user_id', targetKey: 'id'});
/*Comment.belongsTo(user);*/
//Comment.sync({force: true});

module.exports = Comment;