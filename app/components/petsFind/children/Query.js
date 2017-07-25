import React from "react";

import Pets from "./Pets.js";

const axios = require("axios");

export default class Query extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // check initial capitalization of "pet"
      pets: ""
    };
    this.search = this.search.bind(this);
  }

  search(event) {
    event.preventDefault();
    axios.post("/remove").then(function(result) {}).catch(function(error) {
      console.log(error);
    });
    let pets = [];
    for (let i = 0; i < 10; i++) {
      // let random = Math.floor(1000 * Math.random());
      let url = "http://api.petfinder.com/pet.find";
      url += "?key=";
      url += "&animal=";
      url += $("input:checked").attr("id");
			url += "&sex=";
			url += $("input:checked").attr("id");
			url += "&size=";
			url += $("input:checked").attr("id");
      url += "&location=";
      url += $("#location").val();
      url += "&offset=";
      // url += random;
      url += "&count=1&format=json&output=basic";
      console.log(url);
      axios.get(url).then(function(result) {
        console.log(result);
        // check if initial cap necessary for pets
        pets.push(result);
        if (pets.length == 10) {
          this.setState({pets: pets});
        }
      }.bind(this)).catch(function(error) {
        console.log(error);
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col.md-6">
            <form>
              <div className="formGroup">
                <label htmlFor="type">What Kind of Pet Are You Looking For?</label>
                <br/>
                <input type="radio" name="type" id="dog"/>
                Dog
                <input type="radio" name="type" id="cat"/>
                Cat
                <input type="radio" name="type" id="bird"/>
                Bird
                <input type="radio" name="type" id="horse"/>
                Horse
                <input type="radio" name="type" id="barnyard"/>
                Barnyard
                <input type="radio" name="type" id="reptile"/>
                Reptile
                <input type="radio" name="type" id="smallfurry"/>
                Small and Furry (e.g., hamster, ferret)
              </div>


							<br/>
							<div className="formGroup">
                <label htmlFor="type">Gender</label>
                <br/>
								<input type="radio" name="type" id="male"/>
								Male
								<input type="radio" name="type" id="female"/>
								Female
								<input type="radio" name="type" id="any"/>
								Any
							</div>

							<br/>
							<div className="formGroup">
                <label htmlFor="type">Size</label>
                <br/>
								<input type="radio" name="type" id="S"/>
								Small
								<input type="radio" name="type" id="M"/>
								Medium
								<input type="radio" name="type" id="L"/>
								Large
								<input type="radio" name="type" id="XL"/>
								Extra-Large
							</div>

              <br/>
              <div className="formGroup">
                <label htmlFor="location">Location of Pet</label>
                <br/>
                <input type="text" id="location" placeholder="Zip Code"/>
              </div>
              <br/>
              <button type="submit" className="btn btn-default" onClick={this.search}>Search</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col.md-6">
            <Pets pets={this.state.pets}/>
          </div>
        </div>
      </div>
    )
  }
}
