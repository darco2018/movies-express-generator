const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index'); // app hangs when commented off
  // next(); - will continue chain when no view rendering
});

module.exports = router;
