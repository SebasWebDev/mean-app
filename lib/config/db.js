module.exports = {
    secret: 'adkjashfdaiusdfhas',
    db: {
        /**
         * Returns the database configuration string
         *
         * @returns {String}
         */
        getDetails: function () {
            return 'mongodb://localhost:27017/testdb';
        }
    }
};
