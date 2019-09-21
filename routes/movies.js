const express = require('express');

const router = express.Router();

function Movie(title, year) {
  this.title = title;
  this.year = year;
}

const inMemoryMovieDb = [new Movie('Film 1', '1923'), new Movie('Film 2', '1923'), new Movie('Film 3', '1923')];

router.get('/', (req, res) => {
  res.render('movies', { movies: inMemoryMovieDb });
  // res.send('movies route');
});


module.exports = router;
