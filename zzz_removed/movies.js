/* eslint-disable no-console */
const express = require('express');
const request = require('request');

const router = express.Router();
const OMDbAPIkey = '111ffc84';

/* GET movies listing. Actually, it works for /movies/ - as defined in app.js */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  const url = `http://www.omdbapi.com/?apikey=${OMDbAPIkey}&` + 's=polish';
  request(url, (error, response, body) => {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const moviesJSobj = JSON.parse(body); // const singleMovie = bodyObj.Search[0]; or bodyObj["Search"][0]
    res.render('movies', { movieList: moviesJSobj, projectTitle: 'Movies', msg: 'Movies satisfying the search criteria' });
  });
});

// eslint-disable-next-line no-unused-vars
router.get('/results', (req, res, next) => {
  const url = `http://www.omdbapi.com/?apikey=${OMDbAPIkey}&` + 's=polish';
  res.render('Top movies are cool');
});

// it allows this module to be required in app.js
module.exports = router;
