var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require('fs');
var path = require('path');

var port = process.env.PORT || 8080;
var sessionSecret = process.env.SESSION_SECRET || 'secret';
var server = express();

var sessionOptions = {
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000*60
    }
};

fs.stat('./public/uploads', function(err, stats) {
    if (err) {
        fs.mkdir('./public/uploads', function(err){
            if (!err) console.log('Uploads folder created.');
        });
    }
});

server.set('view engine', 'jade');
server.set('views', path.join(process.cwd(), 'server/views'));

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