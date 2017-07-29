// See https://hackhands.com/mongodb-crud-mvc-way-with-passport-authentication/
var mongoose = require('mongoose');
var  Schema2= mongoose.Schema;

var UserSchema = new Schema2({
    username: {String,
    // unique: true
  },
    email: {String,
    // index: true
  },
    password: {String
    },
});

var  User = mongoose.model("User", UserSchema);

module.exports = User;


// ADDED THIS TO MONGO CONFIG - JM already added to testServer.js
// require('../app/models/user.server.model');
