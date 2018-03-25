const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  database.raw(
    'SELECT * FROM foods'
  ).then(function(foods) {
    if(!foods.rows) {
      return res.sendStatus(404)
    } else {
      res.json(foods.rows)
    }
  })
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id

  database.raw(
    'SELECT * FROM foods WHERE id = ?', [id]
  ).then(function(foods) {
    if(!foods.rows) {
      return res.sendStatus(404)
    } else {
      res.json(foods.rows)
    }
  })
});

module.exports = router;
