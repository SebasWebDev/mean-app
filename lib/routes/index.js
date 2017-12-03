var express  = require('express'),
    router   = express.Router(),
    ctrl     = require('../controllers/user'),
    passport = require('passport');

router
    // protected routes
    .get('/', passport.authenticate('jwt', {session: false}))

    // open routes
    .post('/api/signup', ctrl.signup)
    .post('/api/authenticate', ctrl.authenticate)

module.exports = router;
