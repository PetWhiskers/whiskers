// THIS IS AN EXAMPLE ONLY "STARTER FILE"!!!!!

import Keys from ".../keys";
import React from "react";
import Result from "./Result";

export default class SearchList extends React.Component {
  constructor() {
    super();
    this.state = {
      pet_type: "",
      gender: "",
      size: "",
      location: "",
      keyApi: "",
      queryList: []
    }
    this.getApi = this.getApi.bind(this);
    this.searchAnimals = this.searchAnimals.bind(this);
    this.changeField = this.changeField.bind(this);
    this.getApi();
  }

  getApi() {
    axios.get("/getkey", {}).then(function(result) {
      this.setState({keyApi: result.petfinder.pets.pet});
    }.bind(this)).catch(function() {});
  }

  searchAnimals() {
    let pet_type = this.state.pet_type;
    let gender = this.state.gender;
    let size = this.state.size;
    let location = this.state.location;
    let api = this.state.keyApi;
    let params = {
      "api-key": api,
      q: pet_type
    };

    // if(!topic) {
    //   return "";
    // }
    // if(beginDate || endDate) {
    //   if(beginDate)
    //   {
    //     params.beginDate = beginDate;
    //   }
    //   if(endDate) {
    //     params.endDate = endDate;
    //   }
    // }
    // return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json",{
    return axios.get("http://api.petfinder.com/pet.find?key=' + API_Key +
 '&format=json&output=basic&location=27523", {
 const API_Key = API_Key;
    params : params}).then(function(response) {
    this.setState({queryList: result.petfinder.pets.pet});
  }.bind(this)).catch(function(error) {
    console.log(error);
    return "";
  });
}

changeField(event) {
  let key = event.target.id;
  this.setState({[key]: event.target.value});
}
// NOTE TO TEAM AT 8:30 PM ON JULY 19 -- I DID NOT CHANGE THE FOLLOWING
render() {
  return (
    <div>
      {/* <div class="container"> */}
      <div className="row">
        <div className="col-md-6">
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">
                <strong>
                  <i className=""></i>What Kind of Pet Are You Looking For?</strong>
              </h3>

            </div>

            <div className="panel-body">
              {/* <!-- Form for handling the inputs. We can add more input fields--> */}
              <form role="form">

                {/* <!-- Type of Pet - depending on how we can extract info, we might want to add age -- young v. old, or by years--> */}
                <div className="form-group">
                  <label for="pet_type">Type of Pet</label>
                  <select className="form-control" id="[tbd]">
                    <option value="dog">Dog</option>
                    <option value="cat" >Cat</option>
                    <option value="bird">Bird</option>
                    <option value="horse">Horse</option>
                    <option value="barnyard">Barnyard</option>
                    <option value="reptile" >Scales, Fins and Others</option>
                    <option value="smallfurry" >Small and Furry (e.g., hamster, ferret)</option>
                  </select>
                </div>

                {/* <!-- Gender --> */}
                <div className="form-group">
                  <label for="gender">Gender</label>
                  <select className="form-control" id="[tbd]">
                    <option value="M">Male</option>
                    <option value="F" >Female</option>
                    <option value="sex">Any</option>
                  </select>
                </div>

                {/* <!-- number of records that the user wants to retrieve  --> */}
                <div className="form-group">
                  <label for="size">Size:</label>
                  <select className="form-control" id="[tbd]">
                    <option value="S">Small</option>
                    <option value="M" >Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">Extra-large</option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="location">Location - ZIP Code</label>
                  <input type="text" className="form-control" id="location">

                  </div>

                  {/* <!-- submit and clear buttons --> */}
                  <div>
                    <button type="submit" className="btn btn-default" id="run-search">
                      <i className="fa fa-search"></i>
                    Search</button>
                    <button type="button" className="btn btn-default" id="clear-all">
                      <i className="fa fa-trash"></i>
                    Clear Results</button>
                  </div>
                </form>

              </div>
            </div>
          </div>

          <Result headerName="Result" resultsFound={this.state.queryList}/>
        </div>
      </div>
      );
      }
      };
