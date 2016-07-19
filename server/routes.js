module.exports = function (server) {
    // POST requests
    server.post('/admin-login', require('./controllers/admin-login.js').post);
    
    // GET requests
    server.get('/',             require('./controllers/index.js').get);
    server.get('/admin',        require('./controllers/admin.js').get);
    server.get('/admin-login',  require('./controllers/admin-login.js').get);
    
    // 404 Not Found
    server.get('*',             require('./controllers/not-found.js').get);
};