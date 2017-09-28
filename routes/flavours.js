
var flavours = require('../flavours/flavourIndex');
var _ = require("underscore");

module.exports = {
  index: function(req, res) {
      res.render('main', { title: 'Flavourise' });
  },

  update: function(req, res) {
    var searchTerms = req.body.flavours;  // an array of flavour requests.
    var searchResponse = [];              // our returned array of results.

    // push all results into the array.
    for (i = 0; i < searchTerms.length; i++) {
        searchResponse.push(flavours[searchTerms[i]]);
    }

    // find common elements between all arrays
    searchResponse = _.intersection.apply(_, searchResponse);
    console.log(searchResponse);
    res.send(searchResponse);
  }

};
