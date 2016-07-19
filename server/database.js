var mongoose = require('mongoose');

var dbUrl = 'mongodb://arc:foobar@localhost/ja';
var db = mongoose.connection;

mongoose.connect(dbUrl);

db.on('error', function () {
    console.log('Could not connect to MongoDB.');
});

db.on('open', function () {
    console.log('Now connected to MongoDB.');
});