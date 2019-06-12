'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@material-ui/core/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles() {
  return {
    root: {
      display: 'inline'
    },
    fat: {
      fontWeight: 1100,
      textTransform: 'capitalize'
    },
    thin: {
      fontWeight: 300,
      textTransform: 'capitalize'
    }
  };
};

var OpenTargetsTitle = function OpenTargetsTitle(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      name = _ref.name;

  var titleClasses = (0, _classnames2.default)(classes.root, className);
  return _react2.default.createElement(
    _Typography2.default,
    { className: titleClasses, variant: 'h6', color: 'inherit' },
    _react2.default.createElement(
      'span',
      { className: classes.fat },
      'Open Targets '
    ),
    _react2.default.createElement(
      'span',
      { className: classes.thin },
      name
    )
  );
};

exports.default = (0, _styles.withStyles)(styles)(OpenTargetsTitle);