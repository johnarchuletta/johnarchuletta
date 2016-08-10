var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'No title supplied.']
    },
    date: {
        type: Date,
        required: [true, 'No date supplied.']
    },
    keywords: {
        type: Array,
        required: [true, 'No keywords supplied.']
    },
    body: {
        type: String,
        required: [true, 'No body supplied.']
    },
    image: {
        type: String,
        required: [true, 'No image supplied.']
    }
});

module.exports = mongoose.model('Post', postSchema);