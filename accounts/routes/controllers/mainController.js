const User = require('../../models/user');
const bcrypt = require('bcryptjs');

exports.getUserByEmail = (req, res) => {
    User.findOne({email: req.params.email}, (err, user) => {
        if (err) {
            res.status(500);
            res.send('error');
        } else if (!user){
            res.status(404);
            res.send('user not found');
        } else {
            res.json(user);
        }
    });
}

exports.addUser = (req, res) => {
    //hash password
    req.body.password = bcrypt.hashSync(req.body.password, 8);

    const user = new User(req.body);
    user.save(user,(err, new_user) => {
        if (err){
            res.status(500);
            res.send(err);
        } else {
            res.send(new_user);
        }
    });
}

exports.updateUser = (req, res) => {
    User.findOneAndUpdate({email: req.params.email}, req.body, {new: true}, (err, new_user) => {
        if (err) {
            res.status(500);
            res.send(err);
        } else {
            res.json(new_user);
        }
    });
}

exports.deleteUserByEmail = (req, res) => {
    User.deleteOne({email: req.params.email}, (err) => {
        if (err) {
            res.status(500);
            res.send(err);
        } else {
            res.send('user deleted');
        }
    });
}