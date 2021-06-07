var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// Static files middleware
app.use( express.static( "public" ) );

// use res.render to load up an ejs view file

// index page
app.get('/index', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// donate page
app.get('/donate', function(req, res) {
  res.render('pages/donate');
});

app.listen(8080);
console.log('Server is listening on port 8080');