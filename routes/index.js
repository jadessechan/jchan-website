var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
  alert('This website is still under development. Keep coming back for updates!');
});

module.exports = router;
