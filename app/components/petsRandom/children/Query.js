import React from "react";

import Random from "./Random.js";

const axios = require("axios");

export default class Query extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			img: ""
		};
		this.search = this.search.bind(this);
	}

	search(event) {
		event.preventDefault();
		var imgs = [];
		var names = [];
		for (let i = 0; i<10; i++) {
			let url = "http://api.petfinder.com/pet.getRandom";
			url += "?key=";
			url += "&animal=";
			url += $("input:checked").attr("id");
			url += "&location=";
			url += $("#location").val();
			url += "&format=json&output=basic";
			console.log(url);
			console.log(this.state);
			axios.get(url)
				.then(function(result) {
					names.push(result.data.petfinder.pet.name.$t);
					imgs.push(result.data.petfinder.pet.media.photos.photo[3].$t);
				})
				.catch(function(error) {
					console.log(error);
				});
		}
		this.setState({
			imgs: imgs,
			names: names
		});
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
					<Random names={this.state.names} imgs={this.state.imgs} />
				</div>
			</div>
		)
	}
}