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



module.exports = { allFoods, showFood, createFood };
