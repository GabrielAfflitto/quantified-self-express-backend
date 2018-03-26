const index = require('../controllers/mealsController').index;
const show = require('../controllers/mealsController').show;
const create = require('../controllers/mealsController').create;
const destroy = require('../controllers/mealsController').destroy;

var express = require('express');
var router = express.Router();

router.get('/', index);
router.get('/:id/foods', show);
router.post('/:meal_id/foods/:food_id', create);
router.delete('/:meal_id/foods/:food_id', destroy);

module.exports = router;
