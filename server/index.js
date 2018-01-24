const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname, '../client/public')));

server.listen(3030, () => console.log('static files are being served'));