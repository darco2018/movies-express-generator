/* eslint-disable no-console */
require('dotenv').config(); // loads environment variables from a .env file into process.env
const express = require('express');
const request = require('request');

const router = express.Router();
const urlBase = `http://www.omdbapi.com/?apikey=${process.env.OMDB_APIKEY}&`; // + 's=polish';

function Movie(title, year) {
  this.title = title;
  this.year = year;
}
// const inMemoryMovieDb = [new Movie('Film 1', '1923'), new Movie('Film 2', '1923'), new Movie('Film 3', '1923')];
/* GET /movies page. */
router.get('/', (req, res) => {
  const queryParams = 's=polish'; // !!!
  const url = urlBase + queryParams;

  request(url, (error, response, body) => {
    console.log(`error: ${error}`);
    console.log(`status code: ${response}` && response.statusCode);
    console.log(`body: ${body.substring(0, 60)}`);
    console.log(typeof body); // string
    const moviesObj = JSON.parse(body); // now: object

    res.render('movies', { movies: moviesObj });
  });
  // res.render('movies', { movies: inMemoryMovieDb });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const search = req.body.searchword;
  const queryParams = !search ? 's=polish' : `s=${search}`; // !!!
  const url = urlBase + queryParams;

  request(url, (error, response, body) => {
    console.log(`error: ${error}`);
    console.log(`status code: ${response}` && response.statusCode);
    console.log(`body: ${body.substring(0, 60)}`);
    console.log(typeof body); // string
    const moviesObj = JSON.parse(body); // now: object

    res.render('movies', { movies: moviesObj });
  });
});

router.get('/new', (req, res) => {
  res.render('search');
});

module.exports = router;
