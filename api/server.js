const express = require('express');
const server = express();

server.use(express.json())
module.exports = server;


require('./project/router');
require('./resource/router');
require('./task/router');

