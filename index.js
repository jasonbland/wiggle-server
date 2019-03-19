const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('./routes/activityRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
