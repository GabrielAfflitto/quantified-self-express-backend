const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const allFoods = function() {
  return database.raw('SELECT * FROM foods')
}

const showFood = function(id) {
  return database.raw('SELECT * FROM foods WHERE id = ?', [id])
}

const createFood = function(name, calories) {
  return database.raw(
    'INSERT INTO foods(name, calories) VALUES (?, ?) RETURNING *',
    [name, calories]
  )
}

const updateFoodCal = function(calories, id) {
  return database.raw(
    'UPDATE foods SET calories = ? WHERE id = ?',
    [calories, id]
  )
}

const updateFoodName = function(name, id) {
  return database.raw(
      'UPDATE foods SET name = ? WHERE id = ?',
      [name, id]
    )
}



module.exports = { allFoods, showFood, createFood, updateFoodName, updateFoodCal };
