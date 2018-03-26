const allMeals = require('../models/mealsModel').allMeals;
const showMeal = require('../models/mealsModel').showMeal;

const index = function(req, res, next) {
  allMeals().then(function(mealFoods) {
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
}

const show = function(req, res, next) {
  let id = req.params.id
  showMeal(id).then(function(mealFoods){
    if(!mealFoods.rows){
      return res.sendStatus(404)
    } else {
      let output;
      mealFoods.rows.forEach(function(mealFood, index) {
        let foodObject = createFoodObject(mealFood)
        if (index === 0) {
          let mealObject = createMealObject(mealFood)
          mealObject.foods.push(foodObject)
          output = mealObject
        } else {
          output.foods.push(foodObject)
        }
      })
      res.json(output)
    }
  })
}

const createMealObject = function(mealFood) {
  let object = {}
  object['id'] = mealFood.meal_id
  object['name'] = mealFood.meal_name
  object['foods'] = []
  return object
}

const createFoodObject = function(mealFood) {
  let object = {}
  object['id'] = mealFood.food_id
  object['name'] = mealFood.food_name
  object['calories'] = mealFood.calories
  return object
}

const containsObject = function(object, output) {
  for (let i = 0; i < output.length; i++) {
    if (output[i].id === object.id) {
      return true;
    }
  }
  return false;
}

module.exports = { index, show}
