import React from "react";

import Query from "./children/Query.js";
import Random from "./children/Random.js";

export default class Main extends React.Component {
	render() {
		return (
			// We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                {<a className="navbar-brand" href="/">WhiskR</a>}
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {/* Using <Link> in place of <a> and "to" in place of "href" */}
                  <li><a href="/search">Search</a></li>
                  <li><a href="/saved">Saved Pets</a></li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Jumbotron */}
          <div className="jumbotron">
            <h2 className="text-center"><strong>WhiskR</strong></h2>
            <h3 className="text-center">Find your next pet!</h3>
          </div>

          	<div className="panel panel-primary">
  				<div className="panel-heading">
    				<h2 className="panel-title"><i className="glyphicon glyphicon-search" aria-hidden="true"></i> <strong>Search for your pet </strong></h2>
  				</div>
  				<div className="panel-body">
    				<Query />
  				</div>
			</div>

			{/*<div className="panel panel-primary col-sm-6">
  				<div className="panel-heading">
    				<h3 className="panel-title">Results</h3>
  				</div>
  				<div className="panel-body">
    				<Random />
  				</div>
			</div>*/}
          

          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}

          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Built using React.js
            </p>
          </footer>
        </div>
      </div>

		);
	}
}
