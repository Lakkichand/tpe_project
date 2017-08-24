var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(express.static(path.join(__dirname, 'ui')));//change this to the folder name where your index.html is present

app.listen(process.env.PORT || 8080, function() {	
	router.get('/', function(req, res, next) {
	  res.render('index', { title: 'Express' });
	});	
}); 