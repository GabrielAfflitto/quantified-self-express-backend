# Quantified Self Express Backend

This repo is an API built with Express & Node for the [Quantified Self project](https://gabrielafflitto.github.io/quantified-self/) project, a food and calorie diet tracker. Multiple API endpoints are available in order to retreive, create and delete foods, and retreive, create and delete foods that were eaten in any particular meal.

[Try it out on Heroku](https://quantified-self-express.herokuapp.com/)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](#)

## Setup & Installation

Clone the quantified-self-express-backend Github repository into a directory of your choosing.

```
git clone https://github.com/tylermarshal/quantified-self-express-backend.git
```

Move into the quantified-self-express-backend directory & install the required packages.

```
cd quantified-self-express-backend
npm i
```

If you do not have PostgreSQL installed on your machine, do so with the following commands:

1) Install homebrew (unless it is already installed:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2) Install postgresql with homebrew:

```
brew install postgresql
```

Enter PSQL and create the development and test databases:

```
psql
CREATE DATABASE quantified-self-api;
CREATE DATABASE quantified-self-api-test;
\q
```

From here you will need to set up the database:

```
npm install -g knex
knex migrate:latest
knex seed:run
```

To run the application locally, start a nodemon server:

```
npm install nodemon -g
nodemon bin/www
```

After that you are all set track your food consumption and diet.

## Endpoints

The following endpoints are available. All endpoints will return the data as JSON.

Food Endpoints:

GET /api/v1/foods - returns all foods currently in the database
GET /api/v1/foods/:id - returns the object with the specific :id you've passed in or returns 404 if the food is not found
POST /api/v1/foods - allows creating a new food with the parameters: 
{ food: { name: "Name of food here", calories: "Calories here"} } 
If food is successfully created, the food item will be returned. If the food is not successfully created, a 400 status code will be returned. Both name and calories are required fields
PATCH /api/v1/foods/:id - allows one to update an existing food with the parameters: 
{ food: { name: "Name of food here", calories: "Calories here"} } 
If food is successfully updated (name and calories are required fields), the food item will be returned. If the food is not successfully updated, a 400 status code will be returned.
DELETE /api/v1/foods/:id - will delete the food with the id passed in. If the food can't be found, a 404 will be returned.

Meal Endpoints:

GET /api/v1/meals - returns all the meals in the database along with their associated foods
GET /api/v1/meals/:meal_id/foods - returns all the foods associated with the meal with an id specified by :meal_id or a 404 if the meal is not found
POST /api/v1/meals/:meal_id/foods/:id - adds the food with :id to the meal with :meal_id 
This creates a new record in the MealFoods table to establish the relationship between this food and meal. If the meal/food cannot be found, a 404 will be returned.
DELETE /api/v1/meals/:meal_id/foods/:id - removes the food with :id from the meal with :meal_id 
This deletes the existing record in the MealFoods table that creates the relationship between this food and meal. If the meal/food cannot be found, a 404 will be returned.

## Contributing

If you would like to contribute to the project, please open a PR.

## Creators
[Tyler Madsen](https://github.com/tylermarshal)<br/>
[Gabe Afflitto](https://github.com/GabrielAfflitto)

