'use strict';

if (!global.hasOwnProperty('db')) {
    let Sequelize = require('sequelize')
        , sequelize = null;

    const connectionString = process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/postgres';
    const match = connectionString.match(/postgres:\/\/([^:]+):([^@]*)@([^:]+):(\d+)\/(.+)/);
    sequelize = new Sequelize(match[5], match[1], match[2], {
        dialect:  'postgres',
        protocol: 'postgres',
        port:     match[4],
        host:     match[3],
        logging: false,
        dialectOptions: {
            ssl: false
        }
    });

    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize//,
    }

    /*
      Associations can be defined here. E.g. like this:
      global.db.User.hasMany(global.db.SomethingElse)
    */


}

module.exports = global.db;