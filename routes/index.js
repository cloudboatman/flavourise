var express = require('express');
var router = express.Router();
var flavours = require('./flavours.js');

router.get('/', flavours.index);
//
// router.get('/all', flavours.all);
//
router.post('/flavours', flavours.update);
//
// router.post('/create', flavours.create);
//
// router.post('/destroy/:id', flavours.destroy);
//
// router.post('/edit/:id', flavours.edit);

module.exports = router;
