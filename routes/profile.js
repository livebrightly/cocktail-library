var express = require('express');
var router = express.Router();

const profileCtrl = require('../controllers/profile.controller');
const cocktailsCtrl = require('../controllers/api/cocktails.controller');

// GET /profile
router.get('/', profileCtrl.index);

// POST /notes
// Already have access on server do not use: /profile/:id/notes
router.post('/notes', profileCtrl.addNote);

// notes visible when logged in
router.post('/notes', isLoggedIn, profileCtrl.addNote);


// DELETE /notes/:id
// router.delete('/notes/:id', profileCtrl.delNote);




// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;
module.exports = router;