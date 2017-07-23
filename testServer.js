const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const RandomPet = require("./models/randomizer.js");

mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost:27017");
var db = mongoose.connection;

db.on("error", function(error) {
	console.log("Mongoose Error: " + error);
});

db.once("open", function() {
	console.log("Mongoose connection successful.");
});

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/test", function(req, res) {
	res.send("test.html");
});

app.post("/savePet/:age/:email/:description/:city/:state/:name/:sex/:size/:type", function(req, res) {
	let newPet = new RandomPet(req.params);
	newPet.save(function(error, newPet) {
		if (error) console.log(error);
		else res.send("SAVED!");
	});
});

app.listen(3000, function() {
	console.log("App listening on PORT 3000");
});