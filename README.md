# Cooking The Books
![node](https://img.shields.io/node/v/express)
![npm](https://img.shields.io/npm/v/npm)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)


Cooking The Books is a web application developed with the MERN stack with the purpose of providing people with a quick, reliable, source of recipes based on the ingredients that they have available. No saving and updating your inventory. No nonsense.

## Install

This project uses [Node.js](http://nodejs.org), [npm](https://npmjs.com), [MongoDB](https://www.mongodb.com/), [React](https://reactjs.org/), and is configured to deploy to [Azure](https://azure.microsoft.com/en-us/). After cloning the repository, run ```npm install``` in both the `root` directory, as well as the `client/cooking_the_books/` directory to ensure all dependencies are installed.

After installation, create an environment variable `DB_CONN` containing the MongoDB connection link. For more information on doing this, check [this](https://create-react-app.dev/docs/adding-custom-environment-variables/) link. This is currently set to work with MongoDB Atlas, however the Mongoose connection in the `/server/db-conn.js` file can be configured for other platforms. This project assumes a collection `recipes` exists already in the database, but this can be configured in the Mongoose Recipe model definition.

## Usage

After dependency installation and database connection configuration is complete, simply running `node server.js` to run the Express server. This will launch at `localhost:3001` and will output confirmation on server startup and successful database connection.

The `/client/cooking_the_books` directory contains the front end React application. Run `npm start` from this location to start the create-react-app development environment.

## Contributing

Pull requests will be accepted after May 31, 2020.

## Contributors

This project is the work of John Afana, Ryan Hiller, and Daniel Reuter for the Spring 2020 Technical Software Project class at MSU Denver.

## License

[MIT](LICENSE) © Cooking The Books