const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

app.get('/posts/:id/comments', (req, res) => {});

app.post('/posts/:id/comments', (req, res) => {});

app.listen(8001, () => {
    console.log('🚀 Comment Service is UP and listening on PORT 8001');
});