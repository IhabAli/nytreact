let React = require("react");

let Search = React.createClass({
    getInitialState: function(){
        return {
            term: "",
            start: "2000",
            end: "2016",
            results: {}
        }
    },

    handleChange: function (event) {

        let target = event.target;
        let name = target.name;
        let value = target.value;

        console.log('event', event);
        let newState = {};
        newState[name] = value;
        this.setState(newState);
    },
    handleSubmit: function(e){

        //Send search terms to parent
        this.props.setForm({
            topic: this.state.topic,
            startYear: this.state.startYear,
            endYear: this.state.endYear


        });

    this.setState({
    topic: "",
    startYear: "2000",
    endYear: "2016"
        });
        e.preventDefault();
    },

    render: function () {
        return (
            <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center"><strong>
                                Search Parameters</strong></h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Search Term:</label>
                                    <input type="text"
                                           value={this.state.topic}
                                           className="form-control"
                                           name="topic"
                                           id="term"
                                           onChange={this.handleChange}
                                           required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Start Year (Optional):</label>
                                    <input type="number"
                                           name="startYear"
                                           value={this.state.startYear}
                                           className="form-control"
                                           id="start"
                                           onChange={this.handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>End Year (Optional):</label>
                                    <input type="number"
                                           value={this.state.endYear}
                                           className="form-control"
                                           name="endYear"
                                           id="end"
                                           onChange={this.handleChange}
                                    />
                                </div>

                                <button type="submit"
                                        className="btn btn-default"
                                        id="run-search" ><span
                                    className="fa fa-search"/> Search
                                </button>
                                <button type="button"
                                        className="btn btn-default"
                                        id="clear-all"><span
                                    className="fa fa-trash"/> Clear Results
                                </button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

// Export the component back for use in other files

module.exports = Search;