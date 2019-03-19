const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: String,
  dateCreated: Date
});

mongoose.model('events', eventSchema);
