const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const routes = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

const server = app.listen(7777, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

module.exports = server;
