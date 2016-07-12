module.exports = {
    admin: require('./controllers/admin.js'),
    adminLoginGet: require('./controllers/adminLogin.js').adminLoginGet,
    adminLoginPost: require('./controllers/adminLogin.js').adminLoginPost,
    index: require('./controllers/index.js'),
    notFound: require('./controllers/notFound.js')
};