var express = require('express');
var app = express();
var yelpController = require("./controllers/yelpController")
var bodyParser = require('body-parser')


var cors = require('cors');
var Yelp = require('yelp');

// helps with yelp api

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post('/', yelpController.yelpSearch)


app.listen(3000);
