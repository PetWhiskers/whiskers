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

	// nextPet() {
	// 	transition.begin(document.getElementById("petImg"), [
	//         ["transform", "rotate(0)", "rotate(360deg)", "1s"],
	//         ["background-color", "#ffffff", "#ADB5C7", "1s", function(element, finished) {
	//             if (!finished) return;
	//             console.log(this.state.petCount);
	// 			let next = (this.state.petCount + 1);
	// 			this.setState({ petCount: next });
	//             transition.begin(document.getElementById("petImg"), ["background-color", "#ADB5C7", "#ffffff", "1s"]);
	//         }.bind(this)]
	//     ], {
	//         timingFunction: "linear"
	//     });
	// }

	nextPet(event) {
		event.preventDefault();
		$("#petImg").attr("class", "animate");
		let next = (this.state.petCount + 1);
		this.setState({ petCount: next });
		setTimeout(function() {
			$("#petImg").attr("class", "still");
		}, 2000);
	}

	savePet(event) {
		event.preventDefault();
		axios.post(path.join(__dirname, "savePet"), {
				age: this.props.randomPets[this.state.petCount].data.petfinder.pet.age.$t,
				city: this.props.randomPets[this.state.petCount].data.petfinder.pet.contact.city.$t,
				description: this.props.randomPets[this.state.petCount].data.petfinder.pet.description.$t,
				email: this.props.randomPets[this.state.petCount].data.petfinder.pet.contact.email.$t,
				name: this.props.randomPets[this.state.petCount].data.petfinder.pet.name.$t,
				sex: this.props.randomPets[this.state.petCount].data.petfinder.pet.sex.$t,
				size: this.props.randomPets[this.state.petCount].data.petfinder.pet.size.$t,
				state: this.props.randomPets[this.state.petCount].data.petfinder.pet.contact.state.$t,
				type: this.props.randomPets[this.state.petCount].data.petfinder.pet.animal.$t
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
							<h1>{this.props.randomPets[this.state.petCount].data.petfinder.pet.name.$t}</h1>
							<br />
							<img id="petImg" className="still" src={this.props.randomPets[this.state.petCount].data.petfinder.pet.media.photos.photo[3].$t} />
							<br />
							<span className="glyphicon glyphicon-heart" onClick={this.savePet} /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className="glyphicon glyphicon-remove" onClick={this.nextPet} />
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