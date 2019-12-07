const { Router } = require('express')
const Movie = require('./model')

const router = new Router()
router.post('/movies', (req, res, next) => {Movie
    .create(req.body)
    .then(newMovie => res.json(newMovie))
    .catch(next)
});

router.get('/movies', (req, res, next) => {Movie
    .findAll()
    .then(movieList => res.json(movieList))
    .catch(next)
});

module.exports = router