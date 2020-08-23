/*
 *  Name:           Kat Kime
 *  Date:           August 22, 2020
 *  Description:    Index file for How I Got Here Campaign
 *
 */

/*
* Setting up Express
*/
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var hbs = exphbs.create({defaultLayout: 'main'});

// Registering hbs.engine with Express app
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Query parser
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Setting up a folder for static files
app.use(express.static('public'));

// Setting the port
app.set('port', 2341);


/*
*    Setting up routes
*/
app.get('/', function(req, res) {
  res.render('home', req.query);
});

app.get('/node1', function(req, res) {
  res.render('node1', req.query);
});

app.get('/node2', function(req, res) {
  res.render('node2', req.query);
});

app.get('/node3', function(req, res) {
  res.render('node3', req.query);
});

app.get('/node4', function(req, res) {
  res.render('node4', req.query);
});

app.get('/end1', function(req, res) {
  res.render('end1', req.query);
});

app.get('/final', function(req, res) {
  res.render('final', req.query);
});

/*
*   Setting up error handlers
*/

 app.use(function(req,res){
   res.type('text/plain');
   res.status(404);
   res.send('404 - Not Found');
 });

 app.use(function(err, req, res, next){
   console.error(err.stack);
   res.type('plain/text');
   res.status(500);
   res.send('500 - Server Error');
 });

 app.listen(app.get('port'), function(){
   console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
 });
