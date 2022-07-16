var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Cocktail = require('./Cocktail');

var commentSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

var profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  faves: String,
  avatar: String,
  notes: [commentSchema],
  googleId: String
}, {
  timestamps: true
});


module.exports = mongoose.model('Profile', profileSchema);