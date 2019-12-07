const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:helloworld@localhost:5432/postgres'
const exampleData 

const db = new Sequelize(databaseUrl)

db.sync()
    .then(() => console.log("The database is up"))
    .then()
    .catch(err => console.error(err))


module.exports = db


//EXPRESS APP 
//PAGINATION