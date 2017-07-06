var axios = require("axios");

// nyt api key
var key = "a1699c1cddf743888c4fca0bbf277bbc";

var helper = {

    // Function for running the query to geolocate.
    runQuery: function(term, start, end) {

        console.log('search term', term);
        console.log('start', start);
        console.log('end', end);

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

        url += '?' + $.param({
                'api-key': key,
                'q': term,
                'begin_date': start + "0101",
                'end_date': end + "1231",
            });
        console.log(url);
        return axios.get(url).then(function(response) {
            if (response.data.response.docs[0]) {
                return response.data.response.docs;
            }
            return "";
        });
    },

    // Function to retrieve the query results
    getSaved: function() {
        return axios.get("/api/saved");
    },

    // Function posts new searches to our database.
    postSaved: function(location) {
        return axios.post("/api/saved", { location: location });
    }
};

// Export API helper
module.exports = helper;