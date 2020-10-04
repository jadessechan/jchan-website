var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('neuralnetwork');
});


module.exports = router;
