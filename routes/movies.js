/* eslint-disable no-console */
const express = require('express');
const request = require('request');

const router = express.Router();
const OMDbAPIkey = '111ffc84';
const urlBase = `http://www.omdbapi.com/?apikey=${OMDbAPIkey}&`; // + 's=polish';

function Movie(title, year) {
  this.title = title;
  this.year = year;
}
// const inMemoryMovieDb = [new Movie('Film 1', '1923'), new Movie('Film 2', '1923'), new Movie('Film 3', '1923')];

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


module.exports = router;
