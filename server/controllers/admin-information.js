var Info = require('../schemas/info.js');

module.exports = {
    get: function (req, res) {
        if (req.session.user) {
            Info.findOne({}, function (err, info) {
                res.render('admin-information', {info: info});
            });
        } else {
            res.redirect('/admin-login');
        }
    }
};