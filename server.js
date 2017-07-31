// For WHISKERS
// dependencies

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

// const RandomPet = require("./models/pets.js");
const Pet = require("./models/pets.js");
const RandomPet = require("./models/randomizer.js");

// initializes express
// Note to self: having trouble between using "var" and "let" --fix
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017");

var db = mongoose.connection;

const app = express();
const PORT = process.env.PORT || 3000;

// var mongoose = require("mongoose");

// sets mongoose to leverage Promises

// isolate mongo configuration and heroku info
let db = require("./mongoConfig");
db = mongoose.connection;

// Use next  line  to dropDatabase to clear db, but need to delete the line of code if you want the db to remain thereafter:

// db.dropDatabase();

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Mongoose connection successful.");
  let queries = require("./routes/routes");
  app.use(queries);
});

// templated express and static // serves static content from the "public" directory
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));
// parses data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// templated "listen"
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});




//Other attempts
//
// var logger - require("morgan");
//
//
//
// var dotenv = require("dotenv");
//
// // schema for db
// var Articles = require("./models/articles.js");
//
// // controllers
// var routes = require("./controllers/articles_controller.js");
//
// // loads environment variables from .env file into process.env
// dotenv.load();
//
// // sets mongoose to leverage Promises
// mongoose.Promise = Promise;
//
// // initializes express
// var app = express();
//
// // set PORT
// var PORT = process.env.PORT || 3000;
//
// // logs each request to the console
// app.use(logger("dev"));
//
// // parses data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false}));
//
// // serves static content from the "public" directory
// app.use(express.static(process.cwd() + "/public"));
//
// // hooks Mongoose with the MongoDB database (db: nytreact)
// // var mongoConfig = process.env.MONGODB_URI || "mongodb://localhost/nytreact";//************
// var mongoConfig = "mongodb://localhost/nytreact";
// mongoose.connect(mongoConfig);
//
// // saves our mongoose connection to db
// var db = mongoose.connection;
//
// // displays any Mongoose errors
// db.on("error", function(error) {
//    console.log("Mongoose Error: ", error);
// });
//
// // displays success message once logged into db
// db.once("open", function() {
// 	console.log("Mongoose connection successful.");
// });
