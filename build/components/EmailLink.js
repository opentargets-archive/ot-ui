'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('@material-ui/core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _styles = require('@material-ui/core/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactMeasure = require('react-measure');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    emailLink: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.8rem',
      textDecoration: 'none',
      outline: 'none',
      color: 'inherit',
      '&:hover': {
        color: theme.palette.primary.main
      }
    },
    iconPadding: {
      marginRight: '10px'
    }
  };
};

var EmailLink = function EmailLink(_ref) {
  var classes = _ref.classes,
      href = _ref.href,
      label = _ref.label,
      iconClasses = _ref.iconClasses,
      measureRef = _ref.measureRef,
      contentRect = _ref.contentRect;
  return _react2.default.createElement(
    'a',
    { className: classes.emailLink, href: href, ref: measureRef },
    iconClasses && _react2.default.createElement(_Icon2.default, { className: (0, _classnames2.default)(iconClasses, classes.iconPadding) }),
    contentRect.bounds.width < 225 ? 'Email support' : label
  );
};

exports.default = (0, _reactMeasure.withContentRect)('bounds')((0, _styles.withStyles)(styles)(EmailLink));