const express = require("express");

const characters = express.Router();
db = require('../../db/conn.js')

characters.route("/").post(async function (req, res) {
  res.send()
})

module.exports = characters;