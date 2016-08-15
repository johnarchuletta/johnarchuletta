var mongoose = require('mongoose');

var url = process.env.MONGO_URL || 'mongodb://localhost/ja';
var db = mongoose.connection;

mongoose.connect(url);

db.on('error', function () {
  console.log('Could not connect to MongoDB.');
});

db.on('open', function () {
  console.log('Now connected to MongoDB.');
});