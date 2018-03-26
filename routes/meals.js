const index = require('../controllers/mealsController').index;
const show = require('../controllers/mealsController').show;
const create = require('../controllers/mealsController').create;

var express = require('express');
var router = express.Router();

router.get('/', index);
router.get('/:id/foods', show);
router.post('/:meal_id/foods/:food_id', create);

module.exports = router;
