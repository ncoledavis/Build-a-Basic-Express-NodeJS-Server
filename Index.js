const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello World');
});

app.get('/about', (req, res) => {
  res.type('text/plain').send('About page');
});

app.get('/foo', (req, res, next) => {
  const flip = Math.random() < 0.5;
  if (flip) {
    res.type('text/plain').send('sometimes this');
  } else {
    next(); 
  }
});

app.get('/foo', (req, res) => {
  res.type('text/plain').send('and sometimes that');
});

app.get(/^\/user(?:name)?$/, (req, res) => {
  res.type('text/plain').send('Matched /user or /username');
});

app.get('/user/:username', (req, res) => {
  const { username } = req.params;
  res.type('text/plain').send(`Hello ${username}`);
});

app.get('/get', (req, res) => {
  console.log('Query params:', req.query);
  res
    .status(200)
    .type('application/json')
    .send({ message: 'OK', receivedQuery: req.query });
});

app.use((req, res) => {
  res.status(404).type('text/plain').send('404 - Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
``