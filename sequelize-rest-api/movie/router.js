const { Router } = require('express')
const Movie = require('./model')

const router = new Router()
router.post('/movies', (req, res, next) => {Movie
    .create(req.body)
    .then(newMovie => res.json(newMovie))
    .catch(err => next(err))
});

router.get('/movies/', (req, res, next) => {Movie
    .findAll()
    .then(movieList => res.json(movieList))
    .catch(err => next(err))
});

router.get('/movies/movie/:id', (req, res, next) => {Movie
    .findByPk(req.params.id)
    .then(uniqueMovie => res.json(uniqueMovie))
    .catch(err => next(err))
});

router.put('/movies/update/:id', (req, res, next) => { Movie
    .findByPk(req.params.id)
    .then(movie => movie.update(req.body))
    .then(movie => res.send(movie))
    .catch(err => next(err))
});

router.delete('/movies/delete/:id', (req, res, next) => { Movie
    .destroy({ where: {id: req.params.id }})
    .then(number => res.send({ number }))
    .catch(err => next(err))
});

module.exports = router