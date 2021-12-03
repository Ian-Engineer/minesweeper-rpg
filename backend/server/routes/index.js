const express = require("express");

const users = require('./users.js')

const characters = require('./characters.js')

const scores = require('./scores.js')

module.exports = { users, characters, scores }; // REPLACE THIS WITH ALL COMPILED ROUTES