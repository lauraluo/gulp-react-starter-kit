import jsdom from 'jsdom'
import path from 'path'
import fs from 'fs'

import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

//configure
var virtualConsole = jsdom.createVirtualConsole()
var exposedProperties = ['window', 'navigator', 'document']

jsdom.env({
    html: '<!doctype html><head><script></script></head><html><body><span class="test">this is test body</span></body></html>',
    virtualConsole: virtualConsole,
    features: {
        FetchExternalResources: ["link", "script"]
    },
    created: function (error, window) {
        console.log('document created');
        console.log("log typeof jquery: " + typeof window.$);
    },
    onload: function (window) {
        console.log('document onload');
        console.log("log typeof jquery: " + typeof window.$);
    },
    done: function (error, window) {
        console.log('document done');
        console.log("log typeof jquery: " + typeof window.$);
        console.log("log test: " + window.test);
    }
});

//init
global.document = jsdom.jsdom();
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property)
        global[property] = document.defaultView[property]
    }
})

global.navigator = {
    userAgent: 'node.js'
}