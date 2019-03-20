const mongoose = require('mongoose');

const Event = mongoose.model('event');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Enter an event');
  });

  app.post('/api/create_event', async (req, res) => {
    const { name } = req.body;

    const event = new Event({
      name,
      dateCreated: Date.now()
    });

    try {
      await event.save();
      res.status(200).send(name);
    } catch (error) {
      res.status(422).send('Event not created!');
    }
  });
};
