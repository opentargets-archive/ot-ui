'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = function Heading(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _Typography2.default,
    { variant: 'h5' },
    children
  );
};

exports.default = Heading;