module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Enter an event');
  });

  app.post('/api/create_event', (req, res) => {
    const { name } = req.body;

    if (name) {
      res.status(200).send(name);
    } else {
      res.status(422).send('Event not created!');
    }
  });
};
