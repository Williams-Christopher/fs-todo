const express = require ('express');
const app = express();

app.get('/', function (req, res) {
  currentTime = new Date();
  res.send(200, 'Hello Express! ' + currentTime);
});

module.exports = app;
