var flavours = require('../flavours/flavourIndex');

module.exports = {
  index: function(req, res) {
      res.render('main', { title: 'Flavourise' });
  },
  update: function(req, res) {
    var searchTerms = req.body.flavours;

    var searchResponse = {};

    for (i = 0; i < searchTerms.length; i++) {
      searchResponse[searchTerms[i]] = flavours[searchTerms[i]];
    }

    res.send(searchResponse);
  }

};
