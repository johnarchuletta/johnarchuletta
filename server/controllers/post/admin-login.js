exports.adminLogin = function (req, res) {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    if(req.body.username === 'foo' && req.body.password === 'bar') {
        res.redirect('admin');
    } else {
        res.render('admin-login.html', {loginFailed: true});
    }
};