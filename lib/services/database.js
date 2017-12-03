var mongoose = require('mongoose'),
    decadooConfig = require('../config/db.js'),
    databaseConnection,
    DatabaseService = {
        /**
         * Returns database connection
         * @returns {Object}
         */
        connect: function () {
            mongoose.connect(decadooConfig.db.getDetails());
            databaseConnection = mongoose.connection;
            databaseConnection.on('error', function (err) {
                throw new Error('Failed to connect to the database');
            });
            databaseConnection.once('connected', function () {
                console.log('Established connection to the database.');
            });

            return databaseConnection;
        }
    };

module.exports = DatabaseService;
