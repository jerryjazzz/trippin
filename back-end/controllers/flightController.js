var request = require('request');
var config = require("../config");




module.exports = {

    flightSearch: function (req, res, next) {
      console.log('from back-end')


      request("https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=Fyi0cubvIaMHSdV3EbAKLDFx4groZ32e&origin="+req.body.origin+"&destination="+req.body.destination+"&departure_date=2016-02-21&return_date=2016-02-27&adults="+req.body.adult+"&children="+req.body.child+"&infants="+req.body.infant+"&number_of_results=10",

        function (err, response, body) {
          if (body) {
            console.log(body)
            res.json(JSON.parse(body))
          }
        }
      )
    }
}

