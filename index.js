const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.json({ api: 'up' });
});

server.get('/index', function(req, res) {
  res.sendFile('./app/src/views/quickstart.html', { root: __dirname });
});

server.listen(9000, () => console.log('\n== Port 9k ==\n'));
