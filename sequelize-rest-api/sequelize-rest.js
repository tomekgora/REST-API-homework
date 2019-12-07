const Sequelize = require('sequelize')
const Movie = require('./movie/model')
const exampleData = require('./data/example-data')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:hello@localhost:5432/postgres'


const db = new Sequelize(databaseUrl)

db.sync()
    .then(() => console.log("The database is up"))
    .then(() => Movie.create().map(exampleData))
    .catch(err => next(err))

module.exports = db