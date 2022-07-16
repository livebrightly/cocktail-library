const Cocktail = require('../../models/Cocktail');


function createComment(req, res) {
    Cocktail.findById(req.params.id, function (err, cocktail) {
        cocktail.comments.push(req.body);
        cocktail.save(function (err) {
            res.redirect(`/libraryBar/cocktails/${cocktail._id}`);
        });
    });
}

function findByRating(req, res, next) {
    if (comment.rating == 5) {
        Movie.find({
            'comments.rating': 5
        }, function (err, cocktails) {
            console.log(cocktails); // list amazing cocktails!
        });
    } else if (comment.rating == 4) {
        Movie.find({
            'comments.rating': 4
        }, function (err, cocktails) {
            console.log(cocktails); // list decent cocktails!
        });
    } else if (comment.rating == 3) {
        Movie.find({
            'comments.rating': 3
        }, function (err, cocktails) {
            console.log(cocktails); // list average cocktails!
        });
    } else if (comment.rating == 2) {
        Movie.find({
            'comments.rating': 2
        }, function (err, cocktails) {
            console.log(cocktails); // list subpar cocktails!
        });

    } else if (comment.rating == 1) {
        Movie.find({
            'comments.rating': 1
        }, function (err, cocktails) {
            console.log(cocktails); // list last choice cocktails!
        });
    }
}


module.exports = {
    create: createComment,
    findByRating
};