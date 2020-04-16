'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Search = require('@material-ui/icons/Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownIndicator = function DropdownIndicator(_ref) {
  var inputRef = _ref.inputRef,
      innerProps = _ref.innerProps;

  return _react2.default.createElement(_Search2.default, _extends({ ref: inputRef }, innerProps, { color: 'inherit' }));
};

exports.default = DropdownIndicator;