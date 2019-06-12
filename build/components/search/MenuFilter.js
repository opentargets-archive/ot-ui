'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    paper: {
      marginTop: theme.spacing.unit,
      position: 'absolute',
      minWidth: '100px',
      maxWidth: '800px',
      zIndex: 1005
    }
  };
};

var Menu = function Menu(_ref) {
  var classes = _ref.classes,
      innerProps = _ref.innerProps,
      children = _ref.children;
  return _react2.default.createElement(
    _Paper2.default,
    _extends({ square: true, className: classes.paper }, innerProps),
    children
  );
};

exports.default = (0, _styles.withStyles)(styles)(Menu);