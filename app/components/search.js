var React = require("react");
var Results = require("./children/results.js");

var Search = React.createClass({

	var basicQueryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f4b9013ebc664a5b8e3d49ae32dc7729&q=";

	getInitialState: function(){
		return{
			searchTopic: "",
			fromYear: 0,
			toYear: 0,
			articleCounter: 0,
			numResults: 0
		}
	},

	updateState: function(event){
		event.preventDefault();
		this.setState({
			searchTopic: basicQueryURL + event.target.value,
			fromYear: event.target.value,
			toYear: event.target.value,
			numResults: event.target.value
		});
	},


	render: function(){
		return(
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title"><i className=" fa fa-sliders"></i> Search Parameters</h3>
					</div>

						<div className="panel-body">	
							<form role="form">
								<div className="form-group">
									<label for="search">Article Name:</label>
									<input type="text" className="form-control" id="articleName" value={this.state.searchTopic} onChange={this.updateState}>
								</div>

								<div className="form-group">
									<label for="articles">Number of Articles:</label>
									<select className="form-control" id="numberOfArticles" value={this.state.numResults} onChange={this.updateState}>
										<option value="1">1</option>
										<option value="5" selected>5</option>
										<option value="10">10</option>
									</select>
								</div>

								<div className="form-group">
	  								<label for="from" className="col-2 col-form-label">From (Year):</label>
	  								<div className="col-10">
	   									 <input className="form-control" placeholder="YYYY" data-date="from" type="text" id="fromDate" value={this.state.fromYear} onChange={this.updateState}>
	  								</div>
								</div>

								<div className="form-group">
	  								<label for="to" className="col-2 col-form-label">To (Year):</label>
	  								<div className="col-10">
	   									 <input className="form-control" placeholder="YYYY" data-date="to" type="text" id="toDate" value={this.state.toYear} onChange={this.updateState}>
	  								</div>
								</div>

		  						<button type="submit" className="btn btn-default" id="runTopic"><i className="fa fa-search"></i> Search</button>
              					<button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>
		 						
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