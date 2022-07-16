var express = require('express');
var router = express.Router();

const cocktailsCtrl = require('../controllers/api/cocktails.controller');
const profileCtrl = require('../controllers/profile.controller');

//* cocktail routes *//
//* in address bar: http:www.libraryBar/....

// Main libraryBar page | all cocktails visible
router.get('/', cocktailsCtrl.index);

router.get('/glossary', cocktailsCtrl.glossary);

// Details page | display one cocktail
router.get('/details/:cocktailId', cocktailsCtrl.show);

// Details page | display list of favourite
// router.get('/details/:cocktailId', cocktailsCtrl.favourite);

// Modify page | add a cocktail
router.get('/newCocktail', cocktailsCtrl.newCocktailForm);

// Modify page | add a cocktail
router.post('/', cocktailsCtrl.create);

// Modify page | update a cocktail
router.put('/:cocktailId', cocktailsCtrl.update);

// Modify page | delete a cocktail
router.delete('/:cocktailId', isLoggedIn, cocktailsCtrl.delete);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

// auth2 is initialized with gapi.auth2.init() and a user is signed in.

// oauthcallback is initialized with cocktail-Library.oauthcallback.init() and a user is signed in.

// if (oauthcallback.isSignedIn.get()) {
//     var profile = oauthcallback.currentUser.get().getBasicProfile();
//     console.log('ID: ' + profile.getId());
//     console.log('Full Name: ' + profile.getName());
//     console.log('Given Name: ' + profile.getGivenName());
//     console.log('Family Name: ' + profile.getFamilyName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail());
// }



module.exports = router;