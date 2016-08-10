'use strict';

(function() {
    window.onload = function() {
        document.getElementById('portfolio-new-date').value = new Date();
    };
    
    document.getElementById('portfolio-new-form').onsubmit = function () {
        var title = document.getElementById('portfolio-new-title').value;
        var date = document.getElementById('portfolio-new-date').value;
        var keywords = document.getElementById('portfolio-new-keywords').value;
        var body = document.getElementById('portfolio-new-body').value;
        var image = document.getElementById('portfolio-new-image').value;
        
        if (title && date && keywords && body && image) {
            return true;
        } else {
            var oldMessage = document.getElementById('portfolio-new-submit-error');
            if (oldMessage) {
                oldMessage.parentNode.removeChild(oldMessage);
            }
            var message = document.createElement('span');
            message.id = 'portfolio-new-submit-error';
            message.innerHTML = 'Error: Missing fields.';
            message.style.display = 'inline-block';
            message.style.marginRight = '25px';
            message.style.transform = 'scaleX(0)';
            message.style.transformOrigin = 'right';
            message.style.color = 'red';
            message.style.transition = 'transform 500ms';
            var submitButton = document.getElementById('portfolio-new-submit');
            var submitRow = submitButton.parentNode;
            submitRow.insertBefore(message, submitButton);
            setTimeout(function() {
                message.style.transform = 'scaleX(1)';
            }, 20);
            return false;
        }
    };
})();