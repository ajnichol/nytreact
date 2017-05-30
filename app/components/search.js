var React = require("react");
var Results = require("./children/results.js");

var Search = React.createClass({

	render: function(){
		return(
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title"><i class=" fa fa-sliders"></i> Search Parameters</h3>
					</div>

						<div className="panel-body">	
							<form role="form">
								<div className="form-group">
									<label for="search">Article Name:</label>
									<input type="text" class="form-control" id="articleName">
								</div>

								<div className="form-group">
									<label for="articles">Number of Articles:</label>
									<select className="form-control" id="numberOfArticles">
										<option value="1">1</option>
										<option value="5" selected>5</option>
										<option value="10">10</option>
									</select>
								</div>

								<div className="form-group">
	  								<label for="from" class="col-2 col-form-label">From (Year):</label>
	  								<div className="col-10">
	   									 <input className="form-control" value="YYYY" data-date="from" type="text" id="fromDate">
	  								</div>
								</div>

								<div className="form-group">
	  								<label for="to" class="col-2 col-form-label">To (Year):</label>
	  								<div className="col-10">
	   									 <input className="form-control" value="YYYY" data-date="to" type="text" id="toDate">
	  								</div>
								</div>

		  						<button type="submit" className="btn btn-default" id="runTopic"><i class="fa fa-search"></i> Search</button>
              					<button type="button" className="btn btn-default" id="clearAll"><i class="fa fa-trash"></i> Clear Results</button>
		 						
							</form>
						</div>	

						<div className="row">
							<div className="col-sm-12">
								<Results />
							</div>
						</div>
				</div>
		);
	}

});

module.exports = Search;