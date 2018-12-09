const mongoose = require('mongoose');
const validator = require('validator');
mongoose.Promise = global.Promise;

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: 'Please Supply an email address'
    },
    password: String
});

module.exports = mongoose.model('User', userSchema);