const express = require("express");

const users = express.Router();
db = require('../../db/conn.js')

users.route("/").post(async function (req, res) {
  res.send()
})

module.exports = users;