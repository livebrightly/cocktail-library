var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Cocktail = require('./Cocktail');


// TODO: scrape for ingredients

const ingredientsSchema = new mongoose.Schema({
    type: String,
    // required: true
}, {
    timestamps: true
});

module.exports = mongoose.model('Ingredient', ingredientsSchema);