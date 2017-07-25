// For WHISKERS
// dependencies
// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Schemas
var pets = require("./models/pets");

// Create Instance of Express
var app = express();
const PORT = process.env.PORT || 3000;

// templated "listen"
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));


// var mongoose = require("mongoose");
var mongoose = require("mongoose");
// sets mongoose to leverage Promises
mongoose.Promise = Promise;
// isolate mongo configuration and heroku info
var db = require("./mongoConfig");
db = mongoose.connection;

// Use next  line  to dropDatabase to clear db, but need to delete the line of code if you want the db to remain thereafter:

// db.dropDatabase();

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Mongoose connection successful.");
  // var queries = require("./routes/routes");
  // app.use(queries);
});


// / Route to get all saved pets
app.get("/api/saved", function(req, res) {

  Pet.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

// Route to add an article to saved list
app.post("/api/saved", function(req, res) {
  var newArticle = new Pet(req.body);

  console.log(req.body);

  newPet.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to delete an article from saved list
app.delete("/api/saved/", function(req, res) {

  var url = req.param("url");

  Pet.find({ url: url }).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
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
