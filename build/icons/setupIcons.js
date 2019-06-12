'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadCSS = require('fg-loadcss/src/loadCSS');

var setupIcons = function setupIcons() {
  (0, _loadCSS.loadCSS)('https://use.fontawesome.com/releases/v5.1.0/css/all.css', document.querySelector('#insertion-point-jss'));
};

exports.default = setupIcons;