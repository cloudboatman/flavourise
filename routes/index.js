var express = require('express');
var router = express.Router();
var todo = require('./todo');

router.get('/', todo.index);

router.post('/create', todo.create);

router.post('/destroy/:id', todo.destroy);

router.post('/edit/:id', todo.edit);

module.exports = router;
