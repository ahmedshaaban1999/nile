const express = require('express');
const router = express.Router();
const productController = require('./controllers/productController');

router.get('/get/:product_id', productController.getProduct);

module.exports = router;