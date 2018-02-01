const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, '../client/public')));
server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
})

server.listen(3050, () => console.log('static files are being served', 3050));