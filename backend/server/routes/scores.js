const express = require("express");

const scores = express.Router();
db = require('../../db/conn.js')

scores.route("/").post(async function (req, res) {
  
  res.send()
})

scores.route('/').get(async function (req, res) {
  res.send()
})

module.exports = scores;