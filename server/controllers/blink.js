var request = require('request');

module.exports = {
  get: function(req, res) {
    var ip = process.env.ARCNET_URI || '10.0.0.6:3080'; // 67.162.136.158:3080
    console.log(ip);
    request('http://' + ip + '/action?type=blink&target=led', function(error, response, body) {
      if(!error) {
        res.sendStatus(200);
      } else {
        res.sendStatus(503);
      }
    });
  }
};