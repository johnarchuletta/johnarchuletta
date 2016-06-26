var express = require('express');
var path = require('path');
var server = express();
var port = process.env.PORT || 8080;

server.use(express.static('public'));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

require('./routes.js')(server);

server.listen(8080, function() {
    console.log('Server listening on port:', port)
});