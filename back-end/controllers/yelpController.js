var Yelp = require('yelp')

var yelp = new Yelp({
  consumer_key: "KeFJrAAbS7U8zFkAJ_fKtg",
  consumer_secret: "vmf2INtEVJ-az2H682_YdRhnTA4",
  token: "J2fDylNmcrbkXIcFyavjPA6WngOUhheV",
  token_secret: "rzfTOC4ZWg5XfB4qXw3tPaZ9FN0"
})

module.exports = {



  yelpSearch: function (req, res, next) {
    yelp.search({ term: 'food', location: 'Los Angeles' })
      .then(function (data) {
        res.json(data.businesses[0].name);
      })
      .catch(function (err) {
        console.error(err);
      });
  }
}
