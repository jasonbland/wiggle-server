module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Please enter an event!');
  });
};
