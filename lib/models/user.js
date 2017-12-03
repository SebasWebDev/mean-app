var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    bcrypt   = require('bcrypt');
require('mongoose-type-email');
// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/

// set up a mongoose model
var UserSchema = new Schema({
    name: {
        type:     String,
        required: true
    },
    password: {
        type:     String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        unique:   true
    },
    dob: {
        type: Date
    },
    gender: {type: String, enum: ["m", "f"]},
    city: {
        type: String
    },
    date_joined: { 
        type: Date, 
        default: Date.now 
    },
    about: {
        type: String
    },
    hobbies: {
        type: String
    },
    isLogged: {
        type: String,
        enum: ["y", "n"]
    }
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
