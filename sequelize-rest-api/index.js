const express = require('express')
const app = express()
const Movie = require('./movie/model')
port = process.env.PORT || 4000

// const parserMiddleware = bodyParser.json()



app.listen(port, () =>
    console.log(`sequelize-rest app listening on port: ${port}`))