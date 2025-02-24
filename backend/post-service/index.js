const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

const posts = {};

app.get('/post-service', (req, res) => {
    res.send(posts);
});

app.post('/post-service', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id, title
  };

  res.status(201).send(posts[id]);
});

app.listen(7000, () => {
  console.log('Post service is running on port 7000');
});