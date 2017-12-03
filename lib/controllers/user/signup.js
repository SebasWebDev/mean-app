var userModel = require('../../models/user');

module.exports = function signup(req, res) {
    console.log(req);
    if (!req.body.name || 
        !req.body.dob ||
        !req.body.city ||
        !req.body.gender || 
        !req.body.email || 
        !req.body.password) {
        res.json({success: false, msg: 'All fields are required.'});
    } else {
        var newUser = new userModel({
            email: req.body.email,
            dob: req.body.dob,
            city: req.body.city,
            gender: req.body.gender,
            name: req.body.name,
            password: req.body.password
        });
        // save the user
        newUser.save(function(err) {
            if (err) {
                console.log(err);
                return res.json({success: false, msg: 'Username already exists.'});
            }
            res.json({success: true, msg: 'Successful created new user.'});
        });
    }
};
