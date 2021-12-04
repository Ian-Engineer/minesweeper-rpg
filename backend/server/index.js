const express = require('express');
const router = require('./routes/index.js');
const PORT = process.env.PORT || 3000;
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../client/dist')))

app.use('/users', router.users);

app.use('/characters', router.characters)

app.use('/scores', router.scores)

app.listen(PORT, () => {
  console.log('listening on port: ', PORT)
});