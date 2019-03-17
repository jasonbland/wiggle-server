const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
  res.send('Please enter an event!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
