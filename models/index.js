const dbConfig = require('../config/db');
const Sequielize = require('sequelize');
const sequelize = new Sequielize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAlias: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
    });
const db ={};
db.Sequielize = Sequielize;
db.sequelize = sequelize;

// define semua models yang ada pada aplikasi
db.quizzes = require('./quiz')(sequelize, Sequielize);
module.exports = db;