const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const index = require('../controllers/foodsController').index;
const show = require('../controllers/foodsController').show;

var express = require('express');
var router = express.Router();

router.get('/', index)
router.get('/:id', show)

router.post('/', function(req, res, next) {
  var name = req.body.name
  var calories = req.body.calories

  if(!name || !calories) {
    return res.status(422).send({
      error: "Name and calories are required to create a food"
    })
  }

  database.raw(
    'INSERT INTO foods(name, calories) VALUES (?, ?) RETURNING *',
    [name, calories]
  ).then(function(food) {
    res.status(201).json(food.rows)
  })
});

router.patch('/:id', function(req, res, next) {

  let id = req.params.id
  if(req.body.name) {
    var name = req.body.name
  } else if(req.body.calories) {
    var calories = req.body.calories
  }

  if(!name && !calories) {
    return res.status(422).send({
      error: "Name or calories are required to update a food"
    })
  }
  if(name) {
    database.raw(
      'UPDATE foods SET name = ? WHERE id = ?',
      [name, id]
    ).then(function(food) {
      res.status(201).json(food.rows)
    })
  } else if(calories) {
    database.raw(
      'UPDATE foods SET calories = ? WHERE id = ?',
      [calories, id]
    ).then(function(food) {
      res.status(201).json(food.rows)
    })
  }
});

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
