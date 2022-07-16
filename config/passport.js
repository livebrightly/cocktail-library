const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Cocktail = require('../models/Cocktail');

//  Google OAuth
passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    function (accessToken, refreshToken, profile, cb) {
        Profile.findOne({
            'googleId': profile.id
        }, function (err, profile) {
            if (err) return cb(err);
            if (profile) {
                return cb(null, profile);
            } else {
                // we have a new user via OAuth!
                var newProfile = new Cocktail({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });
                newProfile.save(function (err) {
                    if (err) return cb(err);
                    return cb(null, newProfile);
                });
            }
        });
    }
));


// define serializeUser, deserializeUser

// Data for Passport to implement in Session for user authentication
passport.serializeUser(function (user, done) {
    done(null, user.id);
});


// Specifies assigned user from DB
passport.deserializeUser(function (id, done) {
    Cocktail.findById(id, function (err, user) {
        done(err, user);
    });
});