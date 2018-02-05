const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const server = express();
const PORT = process.env.PORT || 3050;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../client/public')));

server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
}) // at the moment, server is using / listening on all ports

server.listen(3050, () => console.log('static files are being served', 3050));