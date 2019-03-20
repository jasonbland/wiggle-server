const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Event');

mongoose.Promise = global.Promise;
mongoose
  .connect(keys.mongoURI)
  .then(() => 'You are connected to Mongo!')
  .catch(err => console.error('Something went wrong', err));

const app = express();

app.use(bodyParser.json());

require('./routes/eventsRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
