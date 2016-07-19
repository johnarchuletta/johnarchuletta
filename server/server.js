var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

var port = process.env.PORT || 8080;
var server = express();

var sessionOptions = {
    secret: '32980hiofubn23f987ghv',
    resave: false,
    saveUninitialized: true
};

server.set('view engine', 'html');
server.set('views', path.join(process.cwd(), 'server/views'));

server.engine('html', require('ejs').renderFile);

server.use(session(sessionOptions));
server.use(express.static('public'));
server.use(express.static('node_modules'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(require('./middleware.js').logger);

server.listen(port, function () {
    console.log('Server listening on port:', port)
});

require('./routes.js')(server);
require('./database.js');