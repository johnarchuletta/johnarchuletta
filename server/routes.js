var multer = require('multer');
var crypto = require('crypto');
var mime = require('mime');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads/');
    },
    filename: function(req, file, cb) {
        var hash = crypto.createHash('sha256');
        hash.update(Date.now().toString());
        var filename =  hash.digest('hex') + '.' + mime.extension(file.mimetype);
        cb(null, filename);
    }
});

var upload = multer({storage: storage});

//---------------------------------------------------------------------------------------------------------------------------------------
// Route Definitions
//---------------------------------------------------------------------------------------------------------------------------------------

module.exports = function (server) {
    //---------------------------------------------------------------------------------------------------------------------------------------
    // GET
    //---------------------------------------------------------------------------------------------------------------------------------------
    
    // Index
    server.get('/',                         require('./controllers/index.js').get);
    server.get('/admin',                    require('./controllers/admin.js').get);
    server.get('/admin-login',              require('./controllers/admin-login.js').get);
    
    // Portfolio
    server.get('/admin/portfolio',          require('./controllers/admin-portfolio.js').get);
    
    // Information
    server.get('/admin/information',        require('./controllers/admin-information.js').get);
    
    //---------------------------------------------------------------------------------------------------------------------------------------
    // POST
    //---------------------------------------------------------------------------------------------------------------------------------------
    
    // Important to note about 'upload.array(name, limit)': the first argument *must* match the HTML file input's 'name' attribute!
    
    // Index
    server.post('/admin-login',             require('./controllers/admin-login.js').post);
    server.post('/admin/blog/create',
                upload.single('image'),     require('./controllers/admin.js').post);
    
    // Portfolio
    server.post('/admin/portfolio/create',
                upload.array('images', 10), require('./controllers/admin-portfolio.js').post);
    
    //---------------------------------------------------------------------------------------------------------------------------------------
    // PUT / UPDATE
    //---------------------------------------------------------------------------------------------------------------------------------------
    
    // Index
    server.post('/admin/blog/update',
                upload.single('image'),     require('./controllers/admin.js').put);
    
    // Portfolio
    server.post('/admin/portfolio/update',
                upload.array('images', 10), require('./controllers/admin-portfolio.js').put);
    
    //---------------------------------------------------------------------------------------------------------------------------------------
    // DELETE
    //---------------------------------------------------------------------------------------------------------------------------------------
    
    // Index
    server.get('/admin/blog/delete/:id',    require('./controllers/admin.js').delete);
    
    // Portfolio
    server.get('/admin/portfolio/delete/:id', require('./controllers/admin-portfolio.js').delete);
    
    //---------------------------------------------------------------------------------------------------------------------------------------
    // 404 NOT FOUND
    //---------------------------------------------------------------------------------------------------------------------------------------
    server.get('*',                         require('./controllers/not-found.js').get);
};