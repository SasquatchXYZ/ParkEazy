# ParkEazy
##### Project 2 - Group 6

An AirBnB-esque web application... but for parking, where users search for available parking permits/spaces that other's have posted.  It is web application using a MySQL database to store the user data, Sequelize as the ORM, Node & Express to run the server and app, and Handlebars as the templating engine.

![Screenshot](public/assets/img/...)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.  See deployment for notes on how to deploy the project on a live system.

### Prerequisites

In order to install and run ParkEazy you will need the following:

```
Node.js
Express.js
Sequelize
MySQL
Handlebars
```

### Installing

You will need to do the following steps after cloning the repo to your device in order to ensure that it works properly.

To ensure Node.js is running within the package and configure all modules for use:

```
npm install (or npm install -y)
```

This should install all the requisite modules, but just in case, you will need:

Dependencies:
```
express     (npm install -s express)
handlebars  (npm install -s express-handlebars)
mysql2      (npm install -s mysql2)
sequelize   (npm install -s sequelize)
body-parser (npm install -s body-parser)
dotenv      (npm install -s dotenv)
```

Dev Dependencies:
```
chai                    (npm install --save-dev chai)
chai-http               (npm install --save-dev express-handlebars)
eslint                  (npm install --save-dev eslint)
eslint-config-prettier  (npm install --save-dev eslint-config-prettier)
eslint-plugin-prettier  (npm install --save-dev eslint-plugin-prettier)
mocha                   (npm install --save-dev mocha)
nyc                     (npm install --save-dev nyc)
prettier                (npm install --save-dev prettier)
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Running 'ParkEazy'

The Sequel is run locally using Node.js, but first you must load the MySQL database, which can be done a number of ways.  The file to create the database is inside the 'db' folder, so it can be opened and run in a MySQL GUI to set up the database, or you can path into the 'db' folder and run it from the MySQL command line (after logging in) using:
 
```
source schema.sql
```
Once the database has been set up, you can then begin the server simply by path into the root folder for the application and running:

```
node server.js
```

This starts the server which is currently set to run at PORT 8080 (http://localhost:8080/), at the same time the model 'listing.js' will create, via Sequelize, the pertinent tables for the application to use.
That is really all there is to starting the application running, after that everything else is run in your browser.

## Deployment

* [Deployed Site](...)

To Come...

## Built With

* [Node.js](https://nodejs.org/en/) - Runtime Environment
* [MySQL](https://www.mysql.com/) - Database
* [Sequelize](http://docs.sequelizejs.com/) - ORM
* [Handlebars](https://handlebarsjs.com/) - Templating Engine
* [Express.js](https://expressjs.com/) - Web Framework
* [Bootstrap](https://getbootstrap.com/) - CSS Framework
* [gitignore.io](https://www.gitignore.io/) - For creating the .gitignore
* [WebStorm](https://www.jetbrains.com/webstorm/) - JavaScript IDE
* [DataGrip](https://www.jetbrains.com/datagrip/) - Database IDE

## Authors

* **Dalton Ricker** - [SasquatchXYZ](https://github.com/SasquatchXYZ)
* **Eric Remoroza** - [ericremoroza](https://github.com/ericremoroza)
* **Rodney Stephenson** - [RodneyGT2018](https://github.com/RodneyGT2018)
* **Matt Crowe** - [mjcr223](https://github.com/mjcr223)

## Acknowledgments
* Many thanks to my instructors & TAs, as well as the O'Reilly reference books.