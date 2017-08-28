

module.exports = {
  index: function(req, res) {
      res.render('main', { title: 'Flavourise' });
  },
  update: function(req, res) {
    var flavours = require('../flavours/flavourIndex');
    var searchTerms = req.body.flavours;
    var searchLength = searchTerms.length;
    var searchResponse = []; // results array passed to the client side
    var holderArray = []; // For non-matched flavours when using more than two search items

    searchResponse = flavours[searchTerms[0]];

    if (searchLength > 1) {
      for (i = 1; i < searchLength; i++) {
        var matchArray = flavours[searchTerms[i]];
        j = 0;
        while (j < searchResponse.length) {
          if (matchArray.indexOf(searchResponse[j]) < 0) {
            searchResponse.splice(j, 1);
          } else {
            j++;
          }
        }
      }
    }

  res.send(searchResponse);
  }

};
