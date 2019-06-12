'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    high: {
      color: theme.palette.high
    },
    medium: {
      color: theme.palette.medium
    },
    low: {
      color: theme.palette.low
    },
    default: {
      color: theme.palette.grey[500]
    }
  };
};

var LabelHML = function LabelHML(_ref) {
  var level = _ref.level,
      children = _ref.children,
      classes = _ref.classes;

  var labelClass = level === 'L' ? classes.low : level === 'M' ? classes.medium : level === 'H' ? classes.high : classes.default;
  return _react2.default.createElement(
    'span',
    { className: labelClass },
    children
  );
};

exports.default = (0, _styles.withStyles)(styles)(LabelHML);