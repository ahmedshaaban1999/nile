const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    }, 
    categories: [String],
    price: Number,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    photo: String,
    description: String,
});

module.exports = mongoose.model('Product',productSchema);