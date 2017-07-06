var React = require("react"),
    router = require("react-router");

var Route = router.Route,
    Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var Main = require('../components/Main'),
    Results = require('../components/children/Results'),
    Saved = require('../components/children/Saved'),
    Search = require('../components/children/Search');


// Export The Routes
module.exports = (

    <Router history={hashHistory}>
        <Route path="/" component={Main}>

            <Route path="results" component={Results} />
            <Route path="saved" component={Saved} />
            <Route path="search" component={Search} />

            <IndexRoute component={Search} />

        </Route>
    </Router>

);