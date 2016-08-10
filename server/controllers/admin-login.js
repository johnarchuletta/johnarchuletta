var User = require('../schemas/user.js');

module.exports = {
    get: function (req, res) {
        if (req.session.user) {
            res.redirect('admin');
        } else {
            res.render('admin-login');
        }
    },
    post: function (req, res) {
        console.log(req.body);
        var action = req.body.action;
    
        if (action === 'login') {
            var username = req.body.username;
            var password = req.body.password;
            
            // TODO: Create hash of password.
            
            if (username != '' && username.length > 2 && password != '' && password.length > 2) {
                User.findOne({username: username, password: password}, function (err, user) {
                    if (user) {
                        req.session.user = user;
                        res.redirect('admin');
                    } else {
                        res.render('admin-login', {error: true, message: 'Login failed [1].'});
                    }
                });
            } else {
                res.render('admin-login', {error: true, message: 'Login failed [2].'});
            }
        }
    }
};