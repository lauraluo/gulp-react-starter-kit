/**
 * Module dependencies.
 */

var express = require('express');

// Path to our public directory
var pub = __dirname + '/public';
var app = express();

app.use(express.static(pub));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/demo', function(req, res) {
    res.render('demo/index.jade', {
        data: null
    });
});

app.get('/', function(req, res) {
    res.render('index.jade', {
        data: null
    });
});

/* istanbul ignore next */
if (!module.parent) {
    app.listen(3002, function() {});
}