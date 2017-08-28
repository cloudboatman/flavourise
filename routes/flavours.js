//
//
// module.exports = {
//   index: function(req, res) {
//       res.render('main', { title: 'Flavourise' });
//   },
//   update: function(req, res) {
//     var flavours = require('../flavours/flavourIndex');
//     var searchTerms = req.body.flavours;
//     var searchLength = searchTerms.length;
//     var searchResponse = []; // results array passed to the client side
//     var holderArray = []; // For non-matched flavours when using more than two search items
//
//     searchResponse = flavours[searchTerms[0]];
//
//     if (searchLength > 1) {
//       for (i = 1; i < searchLength; i++) {
//         var matchArray = flavours[searchTerms[i]];
//         j = 0;
//         while (j < searchResponse.length) {
//           if (matchArray.indexOf(searchResponse[j]) < 0) {
//             searchResponse.splice(j, 1);
//           } else {
//             j++;
//           }
//         }
//       }
//     }
//
//   res.send(searchResponse);
//   }
//
// };

var flavours = require('../flavours/flavourIndex');

module.exports = {
  index: function(req, res) {
      res.render('main', { title: 'Flavourise' });
  },

  update: function(req, res) {
    var searchTerms = req.body.flavours;  // an array of flavour requests.
    var searchResponse = [];              // our returned array of results.

    for (i = 0; i < searchTerms.length; i++) {
      searchResponse.push(flavours[searchTerms[i]]);
    };

    searchResponse = searchResponse.reduce(function(a, b){    // flatten the array.
      return a.concat(b);
    }, []);

    console.log('searchResponse: ', searchResponse);
    // remove duplicates from the search array.
    searchResponse = searchResponse.filter(function(item) {
      return searchResponse.indexOf(item) == searchResponse.lastIndexOf(item);      
    });

    res.send(searchResponse);
  }

};
