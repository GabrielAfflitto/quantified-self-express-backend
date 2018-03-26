const allFoods = require('../models/foodsModel').allFoods;
const showFood = require('../models/foodsModel').showFood;
const createFood = require('../models/foodsModel').createFood;
pry = require('pryjs')

const index = function(req, res, next){
  allFoods().then(function(foods) {
    if(!foods.rows) {
      return res.sendStatus(404)
    } else {
      res.json(foods.rows)
    }
  })
}

const show = function(req, res, next){
  let id = req.params.id
  showFood(id).then(function(foods) {
      if(!foods.rows) {
        return res.sendStatus(404)
      } else {
        res.json(foods.rows)
      }
    })
}

const create = function(req, res, next) {
  var name = req.body.name
  var calories = req.body.calories

  if(!name || !calories) {
    return res.status(422).send({
      error: "Name and calories are required to create a food"
    })
  }
  createFood(name, calories).then(function(food) {
    res.status(201).json(food.rows)
  })
}

module.exports = { index, show, create };
