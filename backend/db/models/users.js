const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  id: Number,
  username: String
})

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
