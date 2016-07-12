var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var server = express();
var port = process.env.PORT || 8080;

server.use(express.static('public'));
server.use(express.static('node_modules'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(require('./middleware.js').logger);

server.set('view engine', 'html');
server.set('views', path.join(process.cwd(), 'server/views'));

server.engine('html', require('ejs').renderFile);

require('./routes.js')(server);

server.listen(port, function () {
    console.log('Server listening on port:', port)
});