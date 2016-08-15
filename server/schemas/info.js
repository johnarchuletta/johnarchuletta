var mongoose = require('mongoose');

var infoSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'No title supplied.']
  },
  date: {
    type: String,
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
  images: {
    type: [String],
    required: [true, 'No images supplied.']
  }
});

module.exports = mongoose.model('Info', infoSchema);