'use strict';

(function() {
    window.onload = function() {
        document.getElementById('blog-new-date').value = new Date();
    };
    
    document.getElementById('blog-new-form').onsubmit = function () {
        var title = document.getElementById('blog-new-title').value;
        var date = document.getElementById('blog-new-date').value;
        var keywords = document.getElementById('blog-new-keywords').value;
        var body = document.getElementById('blog-new-body').value;
        var image = document.getElementById('blog-new-image').value;

        if (title && date && keywords && body && image) {
            return true;
        } else {
            var oldMessage = document.getElementById('blog-new-submit-error');
            if (oldMessage) {
                oldMessage.parentNode.removeChild(oldMessage);
            }
            var message = document.createElement('span');
            message.id = 'blog-new-submit-error';
            message.innerHTML = 'Error: Missing fields.';
            message.style.display = 'inline-block';
            message.style.marginRight = '25px';
            message.style.transform = 'scaleX(0)';
            message.style.transformOrigin = 'right';
            message.style.color = 'red';
            message.style.transition = 'transform 500ms';
            var submitButton = document.getElementById('blog-new-submit');
            var submitRow = submitButton.parentNode;
            submitRow.insertBefore(message, submitButton);
            setTimeout(function() {
                message.style.transform = 'scaleX(1)';
            }, 20);
            return false;
        }
    };
})();