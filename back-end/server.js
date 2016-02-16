var express = require('express');
var app = express();
var yelpController = require("./controllers/yelpController")

var Yelp = require('yelp');

// helps with yelp api


app.get('/', yelpController.yelpSearch);


app.listen(3000);
