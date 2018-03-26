const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

const allFoods = function() {
  return database.raw('SELECT * FROM foods')
}

const showFood = function(id) {
  return database.raw('SELECT * FROM foods WHERE id = ?', [id])
}



module.exports = { allFoods, showFood };
