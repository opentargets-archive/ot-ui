'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function Group(_ref) {
  var children = _ref.children,
      Heading = _ref.Heading,
      headingProps = _ref.headingProps,
      label = _ref.label;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      Heading,
      headingProps,
      label
    ),
    _react2.default.createElement(
      'div',
      null,
      children
    )
  );
};

exports.default = Group;