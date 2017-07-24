
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PetsSchema = new Schema({
  animal: {
    type: String
  },

  animalId: {
    type: String
  },
  breed:  {
  type: String
},
  age: {
    type: String
  },
  description: {
    type: String
  },
  url: {
    type: String
  },
  sex: {
    type: String
  },
  contactemail: {
  type:  String
},
location: {
  type: String
},
});

var Pet = mongoose.model("Pets",PetsSchema);

module.exports = Pets;
