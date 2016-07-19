var mongoose = require('mongoose');
var User = require('../schemas/user.js');

module.exports = {
    get: function (req, res) {
        if (req.session.user) {
            res.redirect('admin');
        } else {
            req.session.user = false;
            res.render('admin-login.html');
        }
    },
    post: function (req, res) {
        var action = req.body.action;
    
        if (action === 'login') {
            var username = req.body.username;
            var password = req.body.password;
    
            User.findOne({username: username, password: password}, function (err, user) {
                if (user) {
                    req.session.user = true;
                    res.redirect('admin');
                } else {
                    res.render('admin-login.html', {loginFailed: true});
                }
            });
        }
    }
};