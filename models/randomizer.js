
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RandomizerSchema = new Schema({
  animal: {
type: String
},
animalId: {
  type: String
},
location: {
  type: String
},
});

RandomizerSchema.statics.gethistory = function(){
  return this.find();
};

RandomizerSchema.statics.addRandomizer = function(animal){
  return this.create(article);
};

RandomizerSchema.statics.removeRandomizer = function(animalId){
  return this.findOneAndRemove(animaIId);
};

let Random = mongoose.model("Random",RandomizerSchema);

module.exports = Randomizer;
