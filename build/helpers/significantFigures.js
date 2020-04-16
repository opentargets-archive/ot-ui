'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Format = require('d3-format');

var significantFigures = (0, _d3Format.format)('.2g');

exports.default = significantFigures;