const allFoods = require('../models/foodsModel').allFoods;
const showFood = require('../models/foodsModel').showFood;
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

module.exports = { index, show };
