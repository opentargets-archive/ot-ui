'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _styles = require('@material-ui/core/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100px',
      height: '100px',
      fill: theme.palette.primary.main
    }
  };
};

var OtIcon = function OtIcon(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      rest = _objectWithoutProperties(_ref, ['className', 'classes']);

  var iconClasses = (0, _classnames2.default)(className, classes.root);
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({
      className: iconClasses,
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 72 72'
    }, rest),
    _react2.default.createElement('path', {
      fill: '#0091eb',
      d: 'M7.9,53c-2.2,0-4.1-1-5.5-2.2S0,47.5,0,45.4c0-4.3,3.6-7.7,7.9-7.7h26.6l0,0H53V53L7.9,53z'
    }),
    _react2.default.createElement('path', {
      fill: '#0091eb',
      d: 'M34.6,56.6v7.7c0,4.3-3.6,7.7-7.9,7.7c-2.2,0-4.1-1-5.5-2.2c-1.4-1.4-2.4-3.4-2.4-5.5v-7.7 C18.7,56.6,34.6,56.6,34.6,56.6z'
    }),
    _react2.default.createElement('path', {
      fill: '#0091eb',
      d: 'M37.7,15.4V7.7C37.7,3.4,41,0,45.4,0s7.9,3.4,7.9,7.7v7.7H37.7z'
    }),
    _react2.default.createElement('path', {
      fill: '#0091eb',
      d: 'M19,19h45.1c4.3,0,7.7,3.4,7.9,7.7c0,4.3-3.6,7.7-7.9,7.7H41.8H19C19,34.3,19,19,19,19z'
    })
  );
};

exports.default = (0, _styles.withStyles)(styles)(OtIcon);