// See https://hackhands.com/mongodb-crud-mvc-way-with-passport-authentication/
var mongoose = require('mongoose');
var  Schema2= mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new Schema2({

    email: String,
    // username: String,
    password: String
});

// User.plugin(passportLocalMongoose);

var  User = mongoose.model("User", UserSchema);

module.exports = User;


// ADDED THIS TO MONGO CONFIG - JM already added to testServer.js
// require('../app/models/user');
