module.exports = {
    logger: function (req, res, next) {
        console.log('Request received for', req.originalUrl);
        next();
    }
};