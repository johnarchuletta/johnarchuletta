window.onload = function () {
    var els = document.getElementsByClassName('expand-animation');
    for(var i = 0; i < els.length; i++) {
        expandAnimation(els[i], i * 500);
    }
};

function expandAnimation(el, t) {
    setTimeout(function() {
        el.style.transform = 'scaleX(1)';
    }, t);
}