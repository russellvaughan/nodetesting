var express = require('express');

var app = express();

var myLogModule = require('./Log.js');

var bodyParser = require('body-parser');

// Create the express router object for Photos
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var port = process.env.PORT || 8080; 

var csvImportRouter = express.Router();

// A GET to the root of a resource returns a list of that resource
csvImportRouter.get('/', function(req, res) { 
res.json({ message: 'hooray! welcome to our api!' });  
res.end(); 
});

// A POST to the root of a resource should create a new object
csvImportRouter.post('/', function(req, res) { 
res.json({ siteToken: req.body.siteToken });  
res.end();
});

// Attach the routers for their respective paths
app.use('/csvImporter', csvImportRouter);

app.listen(port);

console.log('Magic happens on port ' + port);

module.exports = app;