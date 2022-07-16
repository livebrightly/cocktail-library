var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('about', {
    user: req.user,
    name: req.query.name,
    title: 'ABOUT THE BAR',
  });
});

module.exports = router;