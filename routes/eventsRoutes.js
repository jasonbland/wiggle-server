module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Enter an event');
  });
};
