var multer = require('multer');
var crypto = require('crypto');
var mime = require('mime');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function (req, file, cb) {
    var hash = crypto.createHash('sha256');
    hash.update(Date.now().toString());
    var filename = hash.digest('hex') + '.' + mime.extension(file.mimetype);
    cb(null, filename);
  }
});

var upload = multer({storage: storage});

module.exports = function (server) {
  server.get('/', require('./controllers/index.js').get);
  server.get('/admin', require('./controllers/admin.js').get);
  server.get('/admin-login', require('./controllers/admin-login.js').get);
  server.get('/admin/portfolio', require('./controllers/admin-portfolio.js').get);
  server.get('/admin/information', require('./controllers/admin-information.js').get);

  server.get('/blink', require('./controllers/blink.js').get);
  server.get('/api/:cmd', require('./controllers/api.js').get);

  server.post('/admin-login', require('./controllers/admin-login.js').post);
  server.post('/admin/blog/create', upload.single('image'), require('./controllers/admin.js').post);
  server.post('/admin/portfolio/create', upload.array('images', 10), require('./controllers/admin-portfolio.js').post);
  server.post('/admin/blog/update', upload.single('image'), require('./controllers/admin.js').put);
  server.post('/admin/portfolio/update', upload.array('images', 10), require('./controllers/admin-portfolio.js').put);

  server.get('/admin/blog/delete/:id', require('./controllers/admin.js').delete);
  server.get('/admin/portfolio/delete/:id', require('./controllers/admin-portfolio.js').delete);

  server.get('*', require('./controllers/not-found.js').get);
};
