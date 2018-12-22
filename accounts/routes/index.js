const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');

router.get('/user/:email',mainController.getUserByEmail);
router.post('/user', mainController.addUser);
router.put('/user/:email', mainController.updateUser);
router.delete('/user/:email', mainController.deleteUserByEmail);

module.exports = router;