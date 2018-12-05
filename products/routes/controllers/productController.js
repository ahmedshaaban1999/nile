const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.getProduct = (req, res) => {
    const product = Product.findById(req.paramaters.product_id);
    res.json(product);
}