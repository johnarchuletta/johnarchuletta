var controllers = require('./controllers.js');

module.exports = function (server) {
    // POST requests
    server.post('/admin-login', require('./controllers/post/admin-login.js'));
    
    // GET requests
    server.get('/',             require('./controllers/get/index.js'));
    server.get('/admin',        require('./controllers/get/admin.js'));
    server.get('/admin-login',  require('./controllers/get/admin-login.js'));
    
    // 404 Not Found
    server.get('*',             require('./controllers/get/not-found.js'));
};