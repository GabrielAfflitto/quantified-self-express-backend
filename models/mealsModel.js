const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


const allMeals = function() {
  return database.raw(
      'SELECT m.id AS meal_id, m.name AS meal_name, f.id AS food_id, f.name AS food_name, f.calories AS calories FROM meals m JOIN meal_foods mf ON m.id = mf.meal_id JOIN foods f ON f.id = mf.food_id ORDER BY m.id, f.id'
    )
}



module.exports = { allMeals };
