var request = require('request');

module.exports = {
  get: function(req, res) {
    request('http://67.162.136.158:3080/action?type=blink&target=led', function(error, response, body) {
      if(!error) {
        res.sendStatus(200);
      } else {
        res.sendStatus(503);
      }
    });
  }
};