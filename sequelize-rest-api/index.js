const express = require('express')
const bodyParser = require('body-parser')
const Movie = require('./movie/model')
const moviesRouter = require('./movie/router')
const jsonParser = bodyParser.json()

const app = express()
port = process.env.PORT || 4000

// Middleware
app.use(moviesRouter)
app.use(jsonParser)
app.use(bodyParser.urlencoded({ extended: false })
)

app.listen(port, () =>
    console.log(`sequelize-rest app listening on port: ${port}`))


