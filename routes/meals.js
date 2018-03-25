pry = require('pryjs')

const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  database.raw(
    'SELECT m.id AS meal_id, m.name AS meal_name, f.id AS food_id, f.name AS food_name, f.calories AS calories FROM meals m JOIN meal_foods mf ON m.id = mf.meal_id JOIN foods f ON f.id = mf.food_id ORDER BY m.id, f.id'
  ).then(function(mealFoods) {
    if(!mealFoods.rows) {
      return res.sendStatus(404)
    } else {
        let output = []
        mealFoods.rows.forEach(function(mealFood) {
          let mealObject = createMealObject(mealFood)
          let foodObject = createFoodObject(mealFood)
          if (containsObject(mealObject, output) === false) {
            mealObject.foods.push(foodObject)
            output.push(mealObject)
          } else {
            output.forEach(function(meal) {
              if (meal.id === mealFood.meal_id) {
                meal.foods.push(foodObject)
              }
            })
          }
        })
        res.json(output)
      }
    })
  })

  function createMealObject(mealFood) {
    let object = {}
    object['id'] = mealFood.meal_id
    object['name'] = mealFood.meal_name
    object['foods'] = []
    return object
  }

  function createFoodObject(mealFood) {
    let object = {}
    object['id'] = mealFood.food_id
    object['name'] = mealFood.food_name
    object['calories'] = mealFood.calories
    return object
  }

  function containsObject(object, output) {
    for (let i = 0; i < output.length; i++) {
        if (output[i].id === object.id) {
            return true;
        }
    }
    return false;
  }

module.exports = router;
