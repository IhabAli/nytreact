var React = require("react");

var Search = require("./children/Search"),
    Results = require("./children/Results"),
    Saved = require("./children/Saved"),
    helpers = require("./utils/helpers");

var Main = React.createClass({

 
  getInitialState: function() {
    return { query: "", startYear: "", endYear: "", results: "", saved_articles: [] };
  },

    componentDidMount: function() {
        helpers.fetchSaved().then(function(response) {
            console.log(response);
            if (response !== this.state.saved_articles) {
                console.log("Saved", response.data);
                this.setState({ saved_articles: response.data });
            }
        }.bind(this));
    },

    componentDidUpdate: function() {
        helpers.runQuery(this.state.query, this.state.startYear, this.state.endYear).then(function(data) {
            if (data !== this.state.results) {

                this.setState({ results: data });
            }
        }.bind(this));
    },

    setTerm: function(obj) {
        this.setState({query: obj.query});
        this.setState({startYear: obj.startYear});
        this.setState({endYear: obj.endYear});
    },

    showSaved: function() {

    },

  render: function() {
    return (

         <div>
             <Search
                 setTerm={this.setTerm}
             />

             <Results data={this.state.results}/>

             <Saved data={this.state.saved_articles}/>
          </div>      


          );
	   }
});

module.exports = Main;
