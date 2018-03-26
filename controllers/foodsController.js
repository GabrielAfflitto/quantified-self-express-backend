const allFoods = require('../models/foodsModel').allFoods;
const showFood = require('../models/foodsModel').showFood;
const createFood = require('../models/foodsModel').createFood;
const updateFoodCal = require('../models/foodsModel').updateFoodCal;
const updateFoodName = require('../models/foodsModel').updateFoodName;
const deleteFood = require('../models/foodsModel').deleteFood;

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

const update = function(req, res, next) {

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
    updateFoodName(name, id).then(function(food) {
      res.status(201).json(food.rows)
    })
  } else if(calories) {
    updateFoodCal(calories, id).then(function(food) {
      res.status(201).json(food.rows)
    })
  }
}

const destroy = function(req, res, next) {
  let id = req.params.id
  deleteFood(id).then(function(foods) {
    if(!foods.rows) {
      return res.sendStatus(404)
    } else {
      res.json(foods.rows)
    }
  })
}

module.exports = { index, show, create, update, destroy };
