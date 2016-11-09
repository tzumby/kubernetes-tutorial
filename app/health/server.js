'use strict';

const express = require('express');

// Constants
const PORT = 8081;

// App
const app = express();
app.get('/health', function (req, res) {
  res.sendStatus(200);
});

app.get('/readiness', function (req, res) {
  res.sendStatus(200);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
