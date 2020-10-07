var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  alert('This website is still under development. Keep coming back for updates!');
  res.render('index');
});

module.exports = router;
