const express = require('express')
const Movie = require('./movie/model')
const app = express()
port = process.env.PORT || 4000

// const parserMiddleware = bodyParser.json()



app.listen(port, () =>
    console.log(`sequelize-rest app listening on port: ${port}`))