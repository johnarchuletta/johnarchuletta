'use strict';

(function() {
    window.onload = function() {
        console.log('admin-login.js loaded');
        document.getElementById('login-form').onsubmit = function() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            if (username === '') {
                showError('Error: Could not login.');
                return false;
            } else if (username.length < 3) {
                showError('Error: Could not login.');
                return false;
            } else if (password === '') {
                showError('Error: Could not login.');
                return false;
            } else if (password.length < 3) {
                showError('Error: Could not login.');
                return false;
            }
        }
    };
    
    function showError(msg) {
        var el = document.getElementById('error');
        el.style.transform = 'scaleY(1)';
        el.innerHTML = msg;
    }
})();