const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  // res.send('Welcome to / route'); // app hangs when commented off
  // next(); - will continue chain when no view rendering
});

module.exports = router;
