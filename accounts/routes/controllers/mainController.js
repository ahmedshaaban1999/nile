const User = require('../../models/user');

exports.getUser = (req, res) => {
    res.send(`user ${req.params.id} found`);
}