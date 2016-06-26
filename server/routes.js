var controllers = require('./controllers.js');

module.exports = function(server) {
    server.get('/', controllers.index);
    server.get('*', controllers.notFound);
};