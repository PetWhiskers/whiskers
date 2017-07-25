import React from "react";

import Random from "./Random.js";

const axios = require("axios");

export default class Query extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			randomPets: ""
		};
		this.search = this.search.bind(this);
	}

	search(event) {
		event.preventDefault();
		axios.post("/remove")
			.then(function(result) {

			}).catch(function(error) {
				console.log(error);
			});
		let randomPets = [];
		for (let i = 0; i<10; i++) {
			let random = Math.floor(1000 * Math.random());
			let url = "http://api.petfinder.com/pet.find";
			url += "?key=";
			url += "&animal=";
			url += $("input:checked").attr("id");
			url += "&location=";
			url += $("#location").val();
			url += "&offset=";
			url += random;
			url += "&count=1&format=json&output=basic";
			console.log(url);
			axios.get(url)
				.then(function(result) {
					console.log(result);
					randomPets.push(result);
					if (randomPets.length == 10) {
						this.setState({
							randomPets: randomPets
						});
					}
				}.bind(this))
				.catch(function(error) {
					console.log(error);
				});
		}
	}

	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col.xs-8">
						<form>
							<div className="formGroup">
								<label htmlFor="type">Type of Pet</label>
								<br />
								<input type="radio" name="type" id="dog" /> Dog <input type="radio" name="type" id="cat" /> Cat
							</div>
							<br />
							<div className="formGroup">
								<label htmlFor="location">Location of Pet</label>
								<br />
								<input type="text" id="location" placeholder="Zip Code" />
							</div>
							<br />
							<button type="submit" className="btn btn-default" onClick={this.search}>Search</button>
						</form>
					</div>
				</div>
				<div className="row">
					<Random randomPets={this.state.randomPets} />
				</div>
			</div>
		)
	}
}
