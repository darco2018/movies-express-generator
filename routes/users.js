var express = require('express');
var router = express.Router();

/* GET users listing. Actually, it works for /users/ - as defined in app.js*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource to display users list');
});

router.get('/cool', function(req, res, next) {
  res.send('Users are cool');
});

// it allows this module to be required in app.js
module.exports = router;
