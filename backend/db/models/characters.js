const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  id: Number,
  title: String,
  power: String
})

const Characters = mongoose.model('Characters', CharactersSchema);

module.exports = Characters;
