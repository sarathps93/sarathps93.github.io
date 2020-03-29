/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const path = require('path');

const { PORT = 8083 } = process.env;

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
