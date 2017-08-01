// http://passportjs.org/docs/authenticate

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport"	);//added this to package json
const LocalStrategy = require("passport-local").Strategy; //ditto


const RandomPet = require("./models/randomizer.js");
// const Pet = require("./models/pets.js");
const User = require("./models/user.js");//JM added this 7/29
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
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post("/register", function(req, res, next) {
	console.log(req.body);
    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(user);
        }
    });
	
});


app.get("/auth", function(req, res) {
	res.send("/auth.html");
    // app.route("/user").post(users.create);
		// app.route("/user").post(users.create);
});

app.post('/users',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

	// module.exports = function() {
	    passport.use(new LocalStrategy(function(email, password, done) {
	        User.findOne(
	            {email: email},
	            function(err, user) {
	                if (err) {
	                    return done(err);
	                }

	                if (!user) {
	                    return done(null, false, {message: 'Unknown user'});
	                }

	                if (!user.authenticate(password)) {
	                    return done(null, false, {message: 'Invalid password'});
	                }

	                return done(null, user);
	            }
	        );
	    }));
	// };


app.get("/test", function(req, res) {

	res.send("/test.html");
});

app.post("/remove", function(req, res) {
	Pet.remove({}).exec(function(error) {
		if (error) console.log(error);
		res.send("deleted!");
	});
});

app.post("/savePet", function(req, res) {
	let newPet = new Pet(req.body);
	newPet.save(function(error, newPet) {
		if (error) console.log(error);
		else res.send("SAVED!");
	});
});

app.get("/getLikedPets", function(req, res) {
	Pet.find({}).exec(function(error, results) {
		if (error) console.log(error);
		res.send(results);
	});
});

app.listen(3000, function() {
	console.log("App listening on PORT 3000");
});
