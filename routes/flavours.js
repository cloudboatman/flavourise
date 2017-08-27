var flavours = require('../flavours/flavourIndex');

module.exports = {
  index: function(req, res) {
      res.render('main', { title: 'Flavourise' });
  },
  update: function(req, res) {
    // searchParamsy = req.params.split('%');
    // console.log(req);
    res.send(req.params);
  }

};
