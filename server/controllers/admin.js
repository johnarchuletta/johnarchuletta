module.exports = {
    get: function (req, res) {
        if (req.session.user) {
            res.render('admin.html');
        } else {
            res.redirect('/admin-login');
        }
    }
};