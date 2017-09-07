module.exports = {
  get: function(req, res) {
    console.log(req.params);
    if(req.params.cmd === 'test') {
      res.json({message: 'Hello!'});
    } else {
      res.send('Nope!');
    }
  }
};
