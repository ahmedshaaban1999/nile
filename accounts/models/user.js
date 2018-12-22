const mongoose = require('mongoose');
const validator = require('validator');
mongoose.Promise = global.Promise;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Please tell us your name'
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: 'Please write an email address'
    },
    //hashed password
    password: {
        type: String,
        required: 'You must have a password'
    }
});

module.exports = mongoose.model('User', userSchema);