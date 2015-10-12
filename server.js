var express = require('express');
var path = require('path');
var routes = require('./routes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', routes.index);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  res.render('badroute', {
    title: 'Bad route'
  });
});

app.listen(3000, function() {
    console.log('Now listening on port: 3000')
});
