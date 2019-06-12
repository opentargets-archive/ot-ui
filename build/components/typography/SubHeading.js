'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubHeading = function SubHeading(_ref) {
  var left = _ref.left,
      right = _ref.right;
  return _react2.default.createElement(
    _Grid2.default,
    { container: true, justify: 'space-between' },
    _react2.default.createElement(
      _Grid2.default,
      { item: true },
      _react2.default.createElement(
        _Typography2.default,
        { variant: 'subtitle1' },
        left
      )
    ),
    _react2.default.createElement(
      _Grid2.default,
      { item: true },
      _react2.default.createElement(
        _Typography2.default,
        { variant: 'subtitle1' },
        right
      )
    )
  );
};

exports.default = SubHeading;