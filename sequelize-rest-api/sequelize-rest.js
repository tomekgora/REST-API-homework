const Sequelize = require('sequelize')
const Movie = require('./movie/model')
const exampleData = require('./data/example-data')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:hello@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db.sync()
    .then(() => console.log("The database is up"))
    .then(
        () => exampleData.map(movie => {Movie.create(movie)})
    )
    .catch(err => next(err))


// Movie.create
//     .then(movie => res.send(movie))
//     .catch(err => next(err))

// Movie.create(
//     { title='hello', yearOfRelease=1992, synopsis='not bad'}
// )

module.exports = db