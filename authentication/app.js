const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`${err.message}`);
});

require('./models/user');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

module.exports = server;
