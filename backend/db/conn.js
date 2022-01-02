/**
 * 
 * https://zellwk.com/blog/local-mongodb/
 * I used the above link to create a mongoose connection
 * 
 * https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial
 * I used the above link to map routes
 * 
 * https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
 * 
 */

const mongoose = require('mongoose');
const dbName = 'minesweeper-rpg';
// const url = `mongodb://localhost:27017/${dbName}`;
const url = `mongodb://localhost:27017/${dbName}`

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open', _ => {
  console.log('Connected to mongoose: ', url);
  console.log('Using database: ', dbName);
});
db.on('error', err => {
  console.error('connection error in server/db/conn.js: ', err);
});

module.exports = db;