require('babel-register')();

global.requestAnimationFrame = function (cb) {
  return setTimeout(cb, 0);
};

var jsdom = require('jsdom');
const { JSDOM } = jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

// global.document = jsdom('<div id="root"></div>');
const { document } = (new JSDOM('<div id="root"></div>')).window;
global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
