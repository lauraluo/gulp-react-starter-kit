var path = require('path');
var fs = require('fs');

var mainCss = fs.readFileSync(path.normalize(__dirname + "public/css/main.css"), 'utf8');
var commonScript = fs.readFileSync(__dirname + "public/js/common.js", "utf-8");
var loginScript = fs.readFileSync(__dirname + "public/js/login.bundle.js", "utf-8");

var document = jsdom.jsdom('<!DOCTYPE html><html><meta http-equiv="content-type" content="text/html; charset=utf-8"><head></head><body id="abody" ></body></html>', jsdom.level(3, 'index'), {
    features : {
        FetchExternalResources : ['script', 'css'],
        QuerySelector : true
    }
});     



