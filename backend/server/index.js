const express = require('express');
const router = require('./routes/index.js');
const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/users', router.users);

app.use('/characters', router.characters)

app.use('/scores', router.scores)

app.listen(PORT, () => {
  console.log('listening on port: ', PORT)
});