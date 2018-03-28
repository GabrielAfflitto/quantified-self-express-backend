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

## Creators
[Tyler Madsen](https://github.com/tylermarshal)
[Gabe Afflitto](https://github.com/GabrielAfflitto)

