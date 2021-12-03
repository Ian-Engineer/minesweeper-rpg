const mongoose = require('mongoose');

const scoresSchema = new mongoose.Schema({
  id: Number,
  username_id: Number,
  time: Number,
  damage: Number,
  character_id: Number
})

const Scores = mongoose.model('Scores', scoresSchema);

module.exports = Scores;
