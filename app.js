var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var Bear = require('./app/models/bear');
app.listen(8000);

app.get('/register', (req, res) => {
    res.send('Hello World!');
});
