import React from "react";

export default class Random extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-8">
						<h1>{this.props.names[0]}</h1>
						<img src={this.props.img} />
					</div>
				</div>
			</div>
		)
	}
}