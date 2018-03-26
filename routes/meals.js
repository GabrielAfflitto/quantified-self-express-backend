const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const index = require('../controllers/mealsController').index;

var express = require('express');
var router = express.Router();

router.get('/', index);

module.exports = router;
