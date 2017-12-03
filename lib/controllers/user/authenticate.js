var User = require('../../models/user'),
    jwt = require('jwt-simple'),
    config = require('../../config/db');

module.exports = function authenticate(req, res) {
    User.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.encode(user, config.secret);
                    var conditions = { email: req.body.email }
                      , update = { $inc: { isLogged: 'y' }};

                    User.update(conditions, update);

                    // return the information including token as JSON
                    res.json({success: true, msg: {token: 'JWT ' + token, name: user.name}});
                } else {
                    res.send({success: false, msg: 'Authentication failed.'});
                }
            });
        }
    });
};
