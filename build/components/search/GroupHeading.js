'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    groupHeading: {
      padding: '0 0.5rem',
      borderBottom: '1px solid ' + theme.palette.secondary.main
    },
    groupHeadingText: {
      fontSize: '0.75rem',
      color: theme.palette.secondary.main
    }
  };
};

var GroupHeading = function GroupHeading(_ref) {
  var classes = _ref.classes,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    { className: classes.groupHeading },
    _react2.default.createElement(
      _Typography2.default,
      { className: classes.groupHeadingText, variant: 'body1' },
      children
    )
  );
};

exports.default = (0, _styles.withStyles)(styles)(GroupHeading);