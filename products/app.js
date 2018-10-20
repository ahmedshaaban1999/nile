const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config({path: 'variables.env'});

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error',(err) => {
    console.error(err.message);
});

require('./models/product');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',routes);

const server = app.listen(process.env.PORT || 7777,() => {
    console.log(`Express running on port ${server.address().port}`);
})

module.exports = server;