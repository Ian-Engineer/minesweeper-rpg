const mongoose = require('mongoose');

const scoresSchema = new mongoose.Schema({
  id: Number,
  username: String,
  level: Number,
  time: Number,
  health: Number,
  character_id: Number
})

const Scores = mongoose.model('Scores', scoresSchema);

module.exports = Scores;
