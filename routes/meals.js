const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const index = require('../controllers/mealsController').index;
const show = require('../controllers/mealsController').show;

var express = require('express');
var router = express.Router();

router.get('/', index);
router.get('/:id/foods', show);

module.exports = router;
