const Sequelize = require('sequelize')
const db = require('../sequelize-rest')

const Movie = db.define( 'movie', 
    {
        title: Sequelize.TEXT,
        yearofRelease: Sequelize.NUMBER,
        synopsis: Sequelize.TEXT
    });

module.exports = Movie

        // title: { Sequelize.TEXT}
        // yearOfRelease: Sequelize.NUMBER,
        // synopsis: Sequelize.TEXT