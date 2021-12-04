const { reject } = require("async");
const express = require("express");
const Scores = require("../../db/models/scores.js");

const scores = express.Router();
db = require('../../db/conn.js')

scores.route("/").post(async function (req, res) {
  if (req.body.name !== undefined) {
    db
    .collection('scores')
    .findOne({}, {sort: {'id': -1}}, (err, lastScore) => {
      if (err) {
        throw err;
      }
      const newScore = new Scores({
        id: !lastScore ? 1 : lastScore.id + 1,
        username: req.body.name,
        level: req.body.level,
        time: req.body.time,
        health: req.body.health,
        character_id: 1
      })
      console.log(newScore)
      db
      .collection('scores')
      .insertOne(newScore, (err) => {
        if (err) throw err
        res.send()
      })
    })
  }
  res.send();
})



scores.route('/').get(async function (req, res) {
  db
  .collection('scores')
  .find()
  .sort({level: -1, time: 1, health: -1})
  .limit(50)
  .toArray(function(err, result) {
    if (err) throw err;
    res.send(result)
  })
})

module.exports = scores;