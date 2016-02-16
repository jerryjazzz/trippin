var express = require('express');
var app = express();
var yelpController = require("./controllers/yelpController")


var cors = require('cors');
var Yelp = require('yelp');

// helps with yelp api

app.use(cors());

app.get('/', yelpController.yelpSearch);


app.listen(3000);
