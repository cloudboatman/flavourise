var flavours = require('../flavours/flavourIndex');

module.exports = {
  index: function(req, res) {
      res.render('main', { title: 'Flavourise' });
  },
  update: function(req, res) {
    // console.log(req);
    // searchParams = req.data;
    // // console.log(req);
    var body = req.body;
    console.log(body);
    res.send(body);
  }

};
