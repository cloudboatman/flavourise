var flavours = require('../flavours/flavourIndex');

module.exports = {
  index: function(req, res) {
      res.render('main', { title: 'Flavourise' });
  },
  all: function(req, res){
      res.send('All flavours')
  },
  viewOne: function(req, res){
      console.log('Viewing ' + req.params.id);
  },
  create: function(req, res){
      console.log('Flavour created')
  },
  destroy: function(req, res){
      console.log('Flavour deleted')
  },
  edit: function(req, res){
      console.log('Flavour ' + req.params.id + ' updated')
  }
};
