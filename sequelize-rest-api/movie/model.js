const Sequelize = require('sequelize')
const db = require('../db')

const Movie = db.define(
    'movie', {
        title: Sequelize.TEXT,
        yearOfRelease: Sequelize.NUMBER,
        synopsis: Sequelize.TEXT
    }
);
