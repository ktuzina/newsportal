'use strict';

const database = require('../database');

const Section = database.sequelize.define('section',{
    id:{
        type: database.Sequelize.DataTypes.INTEGER,
        primaryKey:true
    },
    name: {
        type: database.Sequelize.DataTypes.STRING
    }
});

// force: true will drop the table if it already exists
/*Section.sync({force: true}).then(() => {
    Section.create({
        id: 1,
        name: 'Технологии'
    });
    Section.create({
        id: 2,
        name: 'Люди'
    });
    Section.create({
        id: 3,
        name: 'Финансы'
    });
    Section.create({
        id: 4,
        name: 'Спорт'
    });
    Section.create({
        id: 5,
        name: 'Недвижимость'
    });
    Section.create({
        id: 6,
        name: 'Авто'
    });
});*/

module.exports = Section;