var request = require('request');

module.exports = {
  get: function(req, res) {
    console.log('hmm');
    request('http://67.162.136.158:3080/action?type=blink&target=led', function(error, response, body) {
      console.log(error);
      console.log(response);
      console.log(body);
    });
    res.render('index');
  }
};