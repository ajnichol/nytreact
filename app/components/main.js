var React = require("react");
var Saved = require("./saved.js");
var Search = require("./search.js");

var Main = React.createClass({

	render: function(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2 className="text-center">New York Times React</h2>
						<h3 className="text-center">Search for and annotate articles of interest</h3>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<Search />
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<Saved />
					</div>
				</div>
			</div>

		);
	}

});

module.exports = Main;
