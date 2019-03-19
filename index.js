const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('./routes/eventsRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
