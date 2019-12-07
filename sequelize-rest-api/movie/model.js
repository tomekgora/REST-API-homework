const Sequelize = require('sequelize')
const db = require('../sequelize-rest')

const Movie = db.define( 'movies', 
    {
        title: {
            type: Sequelize.TEXT,
            field: 'movie_title'
        },
        yearOfRelease: {
            type: Sequelize.INTEGER,
            field: 'year_of_release'
        },
        synopsis: {
            type: Sequelize.TEXT,
            field: 'synopsis'
        }
    });

module.exports = Movie