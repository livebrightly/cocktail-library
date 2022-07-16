const Profile = require('../models/Profile');
const Cocktail = require('../models/Cocktail');


function getAllProfiles(req, res, next) {
    console.log(req.query);
    // Make the query object to use with Profile.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {
        name: new RegExp(req.query.name, 'i')
    } : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    Profile.find(modelQuery)
        .sort(sortKey).exec(function (err, Profiles) {
            if (err) return next(err);
            // Passing search values, name & sortKey, for use in the EJS
            res.render('cocktails/index', {
                Profiles,
                user: req.user, // add the user: user: req.user,
                name: req.query.name,
                sortKey
            });
        });
}

function addNote(req, res, next) {
    req.user.notes.push(req.body);
    req.user.save(function (err) {
        res.redirect('/Profiles');
    });
}




// async function getAllProfiles(req, res, next) {
//     console.log(req.query);
//     let modelQuery = req.query.name ? {
//         name: new RegExp(req.query.name, 'i')
//     } : {};
//     // Default to sorting by name
//     let sortKey = req.query.sort || 'name';
//     Profile.find(modelQuery)
//         .sort(sortKey).exec(function (err, profile) {
//             if (err) return next(err);
//             // Passing search values, name & sortKey, for use in the EJS
//             res.render('profile/all', {
//                 profile,
//                 user: req.user, // add the user: user: req.user,
//                 name: req.query.name,
//                 sortKey
//             });
//         });
// }

// function showProfile(req, res, next) {
//     Profile.findById(req.params.profileId).then(function (profile) {
//             console.log(profile, 'show profile function ran');
//             res.render('', {
//                 title: 'Profile',
//                 currentProfile: profile,
//                 user: req.user
//             });
//         }
//         // res.status(200).json(profile);
//     );
// }

// function createProfile(req, res, next) {
//     console.log(req.body, 'create profile function ran');
//     res.status(200).json(profile);
// }

// function updateProfile(req, res, next) {
//     console.log(req.body, 'update profile function ran');
//     res.status(200).json(profile);
// }

// function deleteProfile(req, res, next) {
//     console.log(req.body, 'delete profile function ran');
//     res.status(200).json(profile);
// }


module.exports = {
    index: getAllProfiles,
    addNote
    // show: showProfile,
    // create: createProfile,
    // update: updateProfile,
    // delete: deleteProfile
};