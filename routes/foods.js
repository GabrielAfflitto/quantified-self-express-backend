const index = require('../controllers/foodsController').index;
const show = require('../controllers/foodsController').show;
const create = require('../controllers/foodsController').create;
const update = require('../controllers/foodsController').update;
const destroy = require('../controllers/foodsController').destroy;

var express = require('express');
var router = express.Router();

router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;
