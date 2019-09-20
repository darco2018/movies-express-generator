const express = require('express');

const router = express.Router();

/* GET movies listing. Actually, it works for /movies/ - as defined in app.js */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.send('...displaying movies list');
});

// eslint-disable-next-line no-unused-vars
router.get('/top', (req, res, next) => {
  res.send('Top movies are cool');
});

// it allows this module to be required in app.js
module.exports = router;
