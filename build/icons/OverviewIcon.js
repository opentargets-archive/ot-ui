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
      width: '100px',
      height: '100px',
      fill: theme.palette.primary.main
    }
  };
};

var OverviewIcon = function OverviewIcon(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      rest = _objectWithoutProperties(_ref, ['className', 'classes']);

  var iconClasses = (0, _classnames2.default)(className, classes.root);
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({
      className: iconClasses,
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 320 279'
    }, rest),
    _react2.default.createElement('path', {
      d: 'M26,32c0-6.1,5-11.1,11.1-11.1h244.7c6.1,0,11.1,4.9,11.1,11.1v211.4c0,6.1-5,11.1-11.1,11.1H37.1 c-6.1,0-11.1-4.9-11.1-11.1V32z M37.1,32v211.4h244.8V32H37.1z'
    }),
    _react2.default.createElement('rect', { x: '59.4', y: '54.2', width: '33.4', height: '11.1' }),
    _react2.default.createElement('rect', { x: '103.9', y: '54.2', width: '55.6', height: '11.1' }),
    _react2.default.createElement('rect', { x: '59.4', y: '76.5', width: '33.4', height: '11.1' }),
    _react2.default.createElement('rect', { x: '103.9', y: '76.5', width: '55.6', height: '11.1' }),
    _react2.default.createElement('rect', { x: '59.4', y: '98.8', width: '33.4', height: '11.1' }),
    _react2.default.createElement('rect', { x: '103.9', y: '98.8', width: '55.6', height: '11.1' }),
    _react2.default.createElement('rect', { x: '59.4', y: '121', width: '33.4', height: '11.1' }),
    _react2.default.createElement('rect', { x: '192.9', y: '165.5', width: '22.2', height: '11.1' }),
    _react2.default.createElement('rect', { x: '192.9', y: '187.8', width: '22.2', height: '11.1' }),
    _react2.default.createElement('rect', { x: '192.9', y: '210', width: '22.2', height: '11.1' }),
    _react2.default.createElement('rect', { x: '226.2', y: '165.5', width: '33.4', height: '11.1' }),
    _react2.default.createElement('path', {
      d: 'M205.9,129.2c-14.2-5.8-24.2-19.8-24.2-36c0-11.5,5-21.9,12.9-29l20,30L205.9,129.2z M216.7,131.9 c1.3,0.1,2.6,0.2,4,0.2c21.5,0,38.9-17.4,38.9-38.9c0-1.3-0.1-2.7-0.2-4l-34.2,8.5L216.7,131.9z M203.9,58 c5.1-2.4,10.8-3.8,16.8-3.8c16.3,0,30.2,10,36,24.2l-33.6,8.4L203.9,58z'
    }),
    _react2.default.createElement('path', {
      d: 'M26,32c0-6.1,5-11.1,11.1-11.1h244.7c6.1,0,11.1,4.9,11.1,11.1v211.4c0,6.1-5,11.1-11.1,11.1H37.1 c-6.1,0-11.1-4.9-11.1-11.1V32z M37.1,32v211.4h244.8V32H37.1z'
    }),
    _react2.default.createElement('rect', { x: '226.2', y: '187.8', width: '33.4', height: '11.1' }),
    _react2.default.createElement('rect', { x: '226.2', y: '210', width: '33.4', height: '11.1' }),
    _react2.default.createElement('rect', { x: '59.4', y: '154.4', width: '11.1', height: '66.8' }),
    _react2.default.createElement('rect', { x: '81.6', y: '198.9', width: '11.1', height: '22.2' }),
    _react2.default.createElement('rect', { x: '103.9', y: '176.6', width: '11.1', height: '44.5' }),
    _react2.default.createElement('rect', { x: '126.1', y: '176.6', width: '11.1', height: '44.5' }),
    _react2.default.createElement('rect', { x: '148.4', y: '187.8', width: '11.1', height: '33.4' }),
    _react2.default.createElement('rect', { x: '103.9', y: '121', width: '55.6', height: '11.1' })
  );
};

exports.default = (0, _styles.withStyles)(styles)(OverviewIcon);