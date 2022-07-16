var express = require('express');
var router = express.Router();

//* THIS IS THE PRELOADER PAGE
// TODO: add preload functionality and redirect to libraryBar: the main page

/* GET API listing. */
router.get('/', function (req, res, next) {
  // res.redirect('/welcome'); // URL
  res.redirect('/libraryBar'); // URL
});


router.get('/welcome', function (req, res, next) {
  res.render('welcome', {
    title: 'THE BAR', // THIS WILL BE THE PRELOADER
    user: req.user
  });
  setTimeout(() => {
    // window.location.assign('/libraryBar'); // not accessible from node.js
  }, 5000);
});


// preload
// router.get('/loading', preloaderCtrl.welcome);
// /* GET API listing. */
// router.get('/', function (req, res, next) {
//   res.redirect('/libraryBar');
//   // res.send('respond with a resource: loading');
// });


// TODO trigger redirect not with HTML...
/* GET API listing. */
// router.get('/', function (req, res, next) {
// res.redirect('/libraryBar');
// res.send('respond with a resource: loading');
// });







module.exports = router;