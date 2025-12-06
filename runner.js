const fs = require('fs');
const { JSDOM } = require('jsdom');

// Read the HTML file
const html = fs.readFileSync('index.html', 'utf8');

// Create a DOM from the HTML
const dom = new JSDOM(html, {
  url: 'http://localhost:3000',
  pretendToBeVisual: true,
  resources: 'usable'
});

// Set up global variables
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

// Load and execute the JavaScript file
require('./scripts/app.js');

console.log('JavaScript executed in terminal environment.');
