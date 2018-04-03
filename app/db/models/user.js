'use strict';

const database = require('../database');

const User = database.sequelize.define('user', {
    id:{
        type: database.Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    name: {
        type: database.Sequelize.DataTypes.STRING
    },
    surname: {
        type: database.Sequelize.DataTypes.STRING
    },
    role: {
        type: database.Sequelize.DataTypes.STRING
    },
    email: {
        type: database.Sequelize.DataTypes.STRING
    },
    password: {
        type: database.Sequelize.DataTypes.STRING
    }
});

// force: true will drop the table if it already exists
/*    User.sync({force: false}).then(() => {
        User.create({
            name: 'test',
            surname: 'test',
            role: 'user',
            email: 'test@test.com',
            password: 'test'
        });
        User.create({
            name: 'admin',
            surname: 'admin',
            role: 'admin',
            email: 'admin@admin.com',
            password: 'admin'
        });
    });*/


module.exports = User;

