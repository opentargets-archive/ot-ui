'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionContainer = function OptionContainer(props) {
  var children = props.children,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      isFocused = props.isFocused,
      isSelected = props.isSelected;

  return _react2.default.createElement(
    _MenuItem2.default,
    _extends({
      buttonRef: innerRef,
      selected: isFocused,
      component: 'div',
      style: {
        fontWeight: isSelected ? 500 : 400
      }
    }, innerProps),
    children
  );
};

exports.default = OptionContainer;