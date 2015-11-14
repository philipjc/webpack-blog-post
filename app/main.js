var Header = require('./component');

var body = document.querySelector('body');
var header = document.createElement('div');

header.className = 'header';
document.body.appendChild(header);

var headerElement = document.querySelector('.header');
headerElement.appendChild(Header());
