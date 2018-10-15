const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.register = async (req, res) => {
    /*
    after registering, redirect to the login page
    */
    try{
        //TODO: check if password is secured
        req.body.password = bcrypt.hashSync(req.body.password, 8);
        await User(req.body).save();
    
        res.statusCode = 200;
        //redirect to login page
        res.send("registeration complete !!!");
    } catch(e) {
        res.statusCode = 500;
        res.json(e);
    }
}

exports.login = async (req,res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        //no user found !!!
        if (!user){
            throw new Error("user not found");
        }
        
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        //password is not valid
        if (!passwordIsValid){
            throw new Error("password doesn't match");
        }
        
        var token = jwt.sign("add another secret here",process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.statusCode = 200;
        res.json({ "Token": token });

    } catch(e) {
        res.statusCode = 500;
        res.json(e);
    }
}