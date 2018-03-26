const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const allMeals = function() {
  return database.raw(
      'SELECT m.id AS meal_id, m.name AS meal_name, f.id AS food_id, f.name AS food_name, f.calories AS calories FROM meals m JOIN meal_foods mf ON m.id = mf.meal_id JOIN foods f ON f.id = mf.food_id ORDER BY m.id, f.id'
    )
}

const showMeal = function(id) {
  return database.raw(
      'SELECT m.id AS meal_id, m.name AS meal_name, f.id AS food_id, f.name AS food_name, f.calories AS calories FROM meals m JOIN meal_foods mf ON m.id = mf.meal_id JOIN foods f ON f.id = mf.food_id WHERE m.id = ? ORDER BY m.id, f.id',
      [id]
    )
}

const createMealFood = function(meal_id, food_id) {
  return database.raw(
      'INSERT INTO meal_foods (meal_id, food_id) VALUES (?, ?)',
      [meal_id, food_id]
    )
}

const deleteMealFood = function(meal_id, food_id) {
  return database.raw('DELETE FROM meal_foods WHERE id IN (SELECT id FROM meal_foods WHERE meal_id = ? AND food_id = ? LIMIT 1)', [meal_id, food_id])
}



module.exports = { allMeals, showMeal, createMealFood, deleteMealFood };
