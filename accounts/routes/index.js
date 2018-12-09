const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');

router.get('/user/:id',mainController.getUser);

module.exports = router;