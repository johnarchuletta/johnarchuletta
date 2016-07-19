module.exports = {
    logger: function (req, res, next) {
        console.log('[' + req.ip + '] ' + req.method + ': ' + req.originalUrl);
        next();
    }
};