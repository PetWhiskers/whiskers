
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let PetsSchema = mongoose.Schema({
  animal: String,
  animalId: String,
  breed:String,
  age: String,
  description: String,
  url: String,
  sex: String,
  contactemail: String,
});

PetsSchema.statics.gethistory = function(){
  return this.find();
};

PetsSchema.statics.addPet = function(pet){
  return this.create(article);
};

ArticleSchema.statics.removePet = function(animalId){
  return this.findOneAndRemove(animalId);
};

let Article = mongoose.model("Pets",PetsSchema);

module.exports = Pets;
