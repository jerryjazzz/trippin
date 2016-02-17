var Yelp = require('yelp')
var config = require("../config")


  var yelp= new Yelp({
  consumer_key: config.CONSUMER_KEY,
  consumer_secret: config.CONSUMER_SECRET,
  token: config.TOKEN,
  token_secret: config.TOKEN_SECRET,
  })
  // console.log(yelp)


module.exports = {
  yelpSearch: function (req, res, next) {
// console.log(searchData)
    yelp.search({ term: req.body.term, location: req.body.location })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        console.error(err);
      });
  }
}
