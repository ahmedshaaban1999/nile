const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.mainPage = (req, res) => {
    res.render('register');
}

exports.register = async (req, res) => {
    /*
    the request consists of:
    -email
    -password
    */
   try{   
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    await User(req.body).save();
    
    var token = jwt.sign({ email: req.body.email, password: req.body.password },                    process.env.SECRET, {
        expiresIn: 86400 // expires in 24 hours
    });

    res.statusCode = 200;
    res.json({"Token": token});
    } catch(e) {
        res.statusCode = 500;
        res.json(e);
    }
}