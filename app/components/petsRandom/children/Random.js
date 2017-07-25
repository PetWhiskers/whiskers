import React from "react";

const path = require("path");
const axios = require("axios");

export default class Random extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			petCount: 0
		}
		this.nextPet = this.nextPet.bind(this);
		this.savePet = this.savePet.bind(this);
	}

	getLikedPets() {
		axios.get("/getLikedPets")
			.then(function(results) {
				console.log(results);
				let likedPets = $("<div>");
				for (let i = 0; i < results.data.length; i++) {
					likedPets.append("Name : " + results.data[i].name);
				}
				console.log(likedPets);
				$("#likedPetsDiv").html(likedPets);
			}).catch(function(error) {
				console.log(error);
			});
	}

	nextPet(event) {
		event.preventDefault();
		$("#petImg").attr("class", "animate");
		let next = (this.state.petCount + 1);
		this.setState({ petCount: next });
		if (next !== 10) {
			setTimeout(function() {
				$("#petImg").attr("class", "still");
			}, 2000);
		} else if (next == 10) {
			$(".glyphicon").css("display", "none");
			$("#petImg").css("display", "none");
			$("#petName").css("display", "none");
			this.getLikedPets();
		}
	}

	savePet(event) {
		event.preventDefault();
		axios.post("/savePet", {
				age: this.props.randomPets[this.state.petCount].data.petfinder.pets.pet.age.$t,
				city: this.props.randomPets[this.state.petCount].data.petfinder.pets.pet.contact.city.$t,
				description: this.props.randomPets[this.state.petCount].data.petfinder.pets.pet.description.$t,
				email: this.props.randomPets[this.state.petCount].data.petfinder.pets.pet.contact.email.$t,
				name: this.props.randomPets[this.state.petCount].data.petfinder.pets.pet.name.$t,
				sex: this.props.randomPets[this.state.petCount].data.petfinder.pets.pet.sex.$t,
				size: this.props.randomPets[this.state.petCount].data.petfinder.pets.pet.size.$t,
				state: this.props.randomPets[this.state.petCount].data.petfinder.pets.pet.contact.state.$t,
				type: this.props.randomPets[this.state.petCount].data.petfinder.pets.pet.animal.$t
			}).then(function(result) {
				console.log(result);
			}.bind(this)).catch(function(error) {
				console.log(error);
			});
		$("#petImg").attr("class", "animate");
		let next = (this.state.petCount + 1);
		this.setState({ petCount: next });
		setTimeout(function() {
			$("#petImg").attr("class", "still");
		}, 2000);
	}

	render() {
		if (this.props.randomPets !== "") {
			return (
				<div className="container">
					<div className="row">
						<div className="col-xs-8">
							<h1 id="petName">{this.props.randomPets[this.state.petCount].data.petfinder.pets.pet.name.$t}</h1>
							<br />
							<img id="petImg" className="still" src={this.props.randomPets[this.state.petCount].data.petfinder.pets.pet.media.photos.photo[3].$t} />
							<br />
							<span className="glyphicon glyphicon-heart" onClick={this.savePet} /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className="glyphicon glyphicon-remove" onClick={this.nextPet} />
							<div id="likedPetsDiv"></div>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				null
			)
		}
	}
}