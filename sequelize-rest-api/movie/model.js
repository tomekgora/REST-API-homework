const Sequelize = require('sequelize')
const db = require('../sequelize-rest')

const Movie = db.define( 'movies', 
    {
        title: Sequelize.TEXT,
        yearOfRelease: Sequelize.INTEGER,
        synopsis: Sequelize.TEXT
    });

module.exports = Movie