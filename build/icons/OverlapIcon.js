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
      display: 'block',
      margin: 'auto',
      strokeWidth: 30,
      stroke: theme.palette.primary.main,
      fill: 'none'
    }
  };
};

var OverlapIcon = function OverlapIcon(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      rest = _objectWithoutProperties(_ref, ['className', 'classes']);

  var iconClasses = (0, _classnames2.default)(className, classes.root);
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({
      className: iconClasses,
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 390 587'
    }, rest),
    _react2.default.createElement('circle', { cx: 100, cy: 293.5, r: 150 }),
    _react2.default.createElement('circle', { cx: 290, cy: 293.5, r: 150 })
  );
};

exports.default = (0, _styles.withStyles)(styles)(OverlapIcon);