var React = require("react");

var Results = React.createClass({
	render: function(){
		return(

			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title"><i className="fa fa-table"></i> Trending</h3>
				</div>
				<div className="panel-body" id="articleSection"></div>
			</div>
				
		);
	}
});

module.exports = Results;