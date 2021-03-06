const { Router } = require('express')
const Movie = require('./model')

const router = new Router()
router.post('/movies', (req, res, next) => {Movie
    .create(req.body)
    .then(newMovie => res.send(newMovie))
    .catch(err => next(err))
});

router.get('/movies', (req, res, next) => {
    const limit = Math.min(req.query.limit || 10, 20)
    const offset = req.query.offset || 0
    Movie
    .findAndCountAll({
        limit, offset
    })
    .then(result => res.json(
        {
            movieList: result.rows, 
            total: result.count
        }))
    .catch(err => next(err))
});

router.get('/movies/movie/:id', (req, res, next) => {Movie
    .findByPk(req.params.id)
    .then(uniqueMovie => res.json(uniqueMovie))
    .catch(err => next(err))
});

router.put('/movies/:id', (req, res, next) => { Movie
    .findByPk(req.params.id)
    .then(movie => movie.update(req.body))
    .then(movie => res.json(movie))
    .catch(err => next(err))
});

router.delete('/movies/:id', (req, res, next) => { Movie
    .destroy({ where: {id: req.params.id }})
    .then(number => res.json({ number }))
    .catch(err => next(err))
});

module.exports = router