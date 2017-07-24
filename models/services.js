
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ServicesSchema = mongoose.Schema({
// which api are we going to use?
  // title: String,
  // articleId:String,
  // synopsis: String,
  // date: String,
  // url: String
});

ServicesSchema.statics.gethistory = function(){
  return this.find();
};

ServicesSchema.statics.addArticle = function(service){
  return this.create(article);
};

ServicesSchema.statics.removeArticle = function(serviceId){
  return this.findOneAndRemove(serviceId);
};

let Service = mongoose.model("Service",ServicesSchema);

module.exports = Service;
