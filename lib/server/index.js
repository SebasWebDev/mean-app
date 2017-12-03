var express = require('express'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator'),
	request = require('request'),
	app = express(),
	config = require('../config.js'),
    routes = require('../routes/index'),
    passport = require('passport'),
    dbConnection,
    dbService = require('../services/database.js');

// DB connection.
dbConnection = dbService.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true  // false
}));
app.use(expressValidator());

app.use(passport.initialize());

require('../config/passport')(passport);

// Set headers including allow origin for cross-origin.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    res.header("Access-Control-Max-Age","86400");
    next();
});

// Routes settings.
app.use('/', routes);

// Catch 404 and forwarding to error handler.
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

console.log('Environment: ' + app.get('env'));
if (app.get('env') === 'production') {
    // Production error handler.
    app.use(function (err, req, res, next) {
        var status = err.status || 500;
        res.json({
            message: err.message
        }, status);
    });
}
else {
    // Development error handler.
    // Will print stacktrace.
    app.use(function (err, req, res, next) {
        var status = err.status || 500;
        res.status(status).json({
            message: err.message,
            error:   err
        });
    });
}


// Port setting.
app.set('port', 8081 || process.env.PORT);

// Start server.
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;