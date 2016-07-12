function pageLoaded() {
    if (sessionStorage.getItem('username') === null) {
        console.log('User not logged in.');
    } else {
        console.log('User logged in.');
    }
}

function loginKeyUp(event) {
    if (event.key === 'Enter') login();
}

function login() {
    var req = new XMLHttpRequest();
    req.open('POST', 'http://localhost:8081/');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify({
        username: document.querySelector('#admin-username').value,
        password: document.querySelector('#admin-password').value
    }));
    req.onload = function() {
        console.log(JSON.parse(req.responseText).success);
    };
}