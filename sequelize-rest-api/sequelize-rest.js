const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:helloworld@localhost:5432/postgres'


const db = new Sequelize(databaseUrl)

db  .sync()
    .then(() => console.log("The database is up"))
    .catch(err => console.error(err))


module.exports = db

//EXPRESS APP
//TEST DATA
//PAGINATION