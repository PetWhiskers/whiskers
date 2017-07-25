// Include the Axios library for HTTP requests
var axios = require("axios");
var key = require(".../Keys");

// Petfinder API Key
var APIKey = API_Key;

// Helper Functions
var helpers = {

    // This will run our query.
    runQuery: function(animal, sex, size, location) {

      // Adjust to get search terms in proper format
      var formattedAnimal = animal();
      var formattedSex = sex();
      var formattedSize = size();
      var formattedLocation = location();

      console.log("Query Run");
      // Run a query using Axios. Then return the results as an object with an array.
      // See the Axios documentation for details on how we structured this with the params.
      return axios.get("http://api.petfinder.com/pet.find?", params : {
        "key": Key,
        "animal": formattedAnimal,
        "sex": formattedStart,
        "size": formattedSize,
        "location": formattedLocation,
        "output": basic,
        "format": json
      }}).then(function(results) {
      console.log("Axios Results", results.petfinder.pets.pet);
      return results.petfinder.pets.pet;
    });
  },


  // This will return any saved pets from our database
  getSaved : function() {
    return axios.get("/api/saved").then(function(results) {
      console.log("axios results", results);
      return results;
    });
  },
  // This will save new pets to our database
  postSaved : function(animal,  url) {
    var newPet = {
      animal.name: title,
      date: date,
      url: url
    };
    return axios.post("/api/saved", newArticle).then(function(response) {
      console.log("axios results", response.data._id);
      return response.data._id;
    });
  },
  // This will remove saved articles from our database
  deleteSaved : function(title, data, url) {
    return axios.delete("/api/saved", {
      params: {
        "title": title,
        "data": data,
        "url": url
      }
    }).then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
};

// We export the helpers function
module.exports = helpers;
