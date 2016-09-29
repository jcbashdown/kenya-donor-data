/* eslint-disable */

const express = require('express');
const app = express();
const path = require('path');

//path
const pathToApp = path.resolve(__dirname, '..');

app.use('/public', express.static(pathToApp + '/public'));

app.get('/', function(req, res) {
    res.sendFile(pathToApp + '/index.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
