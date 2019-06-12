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
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bold: {
      fill: theme.palette.grey[600]
    },
    blue: {
      fill: theme.palette.primary.main
    },
    red: {
      fill: theme.palette.secondary.main
    },
    default: {
      fill: theme.palette.grey[500]
    }
  };
};

var MAX_RADIUS = 6;
var WIDTH = 2 * (MAX_RADIUS + 1);
var CENTER = WIDTH / 2;
var DataCircle = function DataCircle(_ref) {
  var radius = _ref.radius,
      colorScheme = _ref.colorScheme,
      classes = _ref.classes;

  var className = classes[colorScheme];
  return _react2.default.createElement(
    'div',
    { className: classes.container },
    _react2.default.createElement(
      'svg',
      { width: WIDTH, height: WIDTH, xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement('circle', { cx: CENTER, cy: CENTER, r: radius, className: className })
    )
  );
};

exports.default = (0, _styles.withStyles)(styles)(DataCircle);