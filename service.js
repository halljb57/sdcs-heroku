var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/app', express.static(__dirname + '/app'));
app.use('/src', express.static(__dirname + '/src'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  console.log('http://127.0.0.1:5000');
});


