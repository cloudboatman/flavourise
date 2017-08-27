var flavours = require('../flavours/flavourIndex');

module.exports = {
  index: function(req, res) {
      res.render('main', { title: 'Flavourise' });
  },
  update: function(req, res) {
    item = req.params;

    res.send(flavours.items[0])


  }

};
