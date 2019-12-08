const Sequelize = require('sequelize')
const Movie = require('./movie/model')
const exampleData = require('./data/example-data')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:hello@localhost:5432/postgres'

// function loadData() {
//     exampleData.map(movie => {
//         Movie.create(movie)
//     })
// };

const db = new Sequelize(databaseUrl)

db.sync()
    .then((result) => console.log("The database is up", result))
    // .then(() => example.Data.map((movie) => Movie.create(movie)))
    // thos ,ade np semse I need to use .finally()
    .catch(err => next(err))
    .finally(loadData())

// Movie.create({title:'titanic', yearOfRelease:1996, synopsis:'not bad'})
//     .then(movie => {})


module.exports = db