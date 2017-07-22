import React from "react";

export default class Random extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			petCount: 0
		}
		this.nextPet = this.nextPet.bind(this);
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

	nextPet() {
		$("#petImg").attr("class", "animate");
		let next = (this.state.petCount + 1);
		this.setState({ petCount: next });
		setTimeout(function() {
			$("#petImg").attr("class", "still");
		}, 2000);
	}

	render() {
		if (this.props.names !== "") {
			return (
				<div className="container">
					<div className="row">
						<div className="col-xs-8">
							<h1>{this.props.names[this.state.petCount]}</h1>
							<br />
							<img id="petImg" className="still" src={this.props.imgs[this.state.petCount]} />
							<br />
							<span className="glyphicon glyphicon-heart" onClick={this.nextPet} /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className="glyphicon glyphicon-remove" onClick={this.nextPet} />
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