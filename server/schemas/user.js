var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'No username supplied.']
    },
    password: {
        type: String,
        required: [true, 'No password supplied.']
    }
});

module.exports = mongoose.model('User', userSchema);