import {
    expect
} from 'chai'
import {
    shallow,
    mount
} from 'enzyme'
import jsdom from 'jsdom'
import path from 'path'
import fs from 'fs'

var commonScript = fs.readFileSync("./public/js/common.bundle.js", "utf-8");
var virtualConsole = jsdom.createVirtualConsole();

// jsdom.env({
//     html: '<!doctype html><html><body><span class="test">this is test body</span></body></html>',
//     scripts: ["https://code.jquery.com/jquery-3.1.1.min.js"],
//     virtualConsole: virtualConsole,
//     done: function (err, window) {
//         // console.log("body的內容:", window.$(".test").length);
//         if(err) {
//             console.log(err);
//         }
//         console.log("lalalalalala");
//         console.log(window.test);
//         console.log(typeof window.$);
//     }
// });

global.document = jsdom.jsdom({
    html: '<!doctype html><html><body><span class="test">this is test body</span></body></html>',
    virtualConsole: virtualConsole,
    done: function (err, window) {

    }
});
global.window = document.defaultView;

global.window.onModulesLoaded = function () {
    console.log("ready to roll!");
    // console.log("body的內容:", window.$(".test").length);
    if (err) {
        console.log(err);
    }
    console.log("lalalalalala");
    console.log(window.test);
    console.log(typeof window.$);
};

window.addEventListener("error", function (event) {
  console.error("script error!!", event.error);
});
global.navigator = global.window.navigator;