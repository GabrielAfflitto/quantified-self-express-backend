const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const index = require('../controllers/foodsController').index;
const show = require('../controllers/foodsController').show;
const create = require('../controllers/foodsController').create;
const update = require('../controllers/foodsController').update;

var express = require('express');
var router = express.Router();

router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.patch('/:id', update)

router.delete('/:id', function(req, res, next) {
  let id = req.params.id

  database.raw(
    'DELETE FROM foods WHERE id = ?', [id]
  ).then(function(foods) {
    if(!foods.rows) {
      return res.sendStatus(404)
    } else {
      res.json(foods.rows)
    }
  })

})

module.exports = router;
