const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/User');
require('./models/Event');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/eventsRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
