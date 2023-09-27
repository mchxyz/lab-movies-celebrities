var express = require('express');
var router = express.Router();

const Celebrity = require('../models/Celebrity')

router.get('/add-celebrity', (req, res, next) => {

    res.render('celebrities/new-celebrity.hbs')

})

module.exports = router;

