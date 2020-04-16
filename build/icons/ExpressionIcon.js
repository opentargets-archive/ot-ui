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

var ExpressionIcon = function ExpressionIcon(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      rest = _objectWithoutProperties(_ref, ['className', 'classes']);

  var iconClasses = (0, _classnames2.default)(className, classes.root);
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({
      className: iconClasses,
      viewBox: '0 0 320 279',
      xmlns: 'http://www.w3.org/2000/svg'
    }, rest),
    _react2.default.createElement('path', {
      d: 'M296.5,187c0-3.2-2.4-5.6-5.6-5.6c-22.2,0-43.7-15.9-60.4-43.7c16.3-28.2,37.7-43.3,60.4-43.7c3.2,0,5.6-2.4,5.6-5.6 s-2.4-5.6-5.6-5.6c-25,0.4-48.5,15.9-66.3,44.1c-5.2-8.3-10.7-14.7-16.7-20.7c-17.5-17.5-37.7-25-58.4-22.6 c-21.8,2.8-42.5,18.7-58.8,43.7C72.5,98.9,49,83.4,24.4,83.4c-3.2,0-5.6,2.4-5.6,5.6s2.4,5.6,5.6,5.6c22.2,0,43.7,15.9,60.4,43.7 c-16.3,28.2-37.7,43.3-60.4,43.7c-3.2,0-5.6,2.4-5.6,5.6c0,1.6,0.4,2.8,1.6,4c1.2,1.2,2.4,1.6,4,1.6c25-0.4,48.5-15.9,66.3-44.1 c5.2,8.3,10.7,14.7,16.7,20.7l0,0c17.5,17.5,37.7,25,58.4,22.6c21.8-2.8,42.5-18.7,58.8-43.7c5.2,8.3,10.7,15.5,16.7,21.4 c15.1,15.1,31.8,23,50,23C293.7,193,296.5,190.2,296.5,187z M164.2,181.1c-16.7,2.4-33.8-4.4-48.9-19.5 c-6.4-6.4-12.7-14.3-18.3-23.8c14.7-25,34.2-40.5,53.6-43.3c16.7-2.4,33.8,4.4,48.9,19.5c6.4,6.4,12.7,14.3,18.3,23.8 C203.1,162.8,183.7,178.3,164.2,181.1z'
    }),
    _react2.default.createElement('path', {
      d: 'M276.6,107.6V168c0,1.6,0.8,3.2,1.6,4c1.2,1.2,2.4,1.6,4,1.6c3.2,0,5.6-2.4,5.6-5.6v-60.4c0-3.2-2.4-5.6-5.6-5.6 C279.4,102.4,277,104.8,276.6,107.6z'
    }),
    _react2.default.createElement('path', {
      d: 'M260.7,111.6c-3.2,0-5.6,2.4-5.6,5.6v41.3c0,1.6,0.8,3.2,1.6,4c1.2,1.2,2.4,1.6,4,1.6c3.2,0,5.6-2.4,5.6-5.6v-41.3 C266.3,114,263.9,111.6,260.7,111.6z'
    }),
    _react2.default.createElement('path', {
      d: 'M38.7,167.6l0-60.4c0-3.2-2.4-5.6-5.6-5.6c-3.2,0-5.6,2.4-5.6,5.6l0,60.4c0,1.6,0.8,3.2,1.6,4c0.8,0.8,2.4,1.6,4,1.6 C35.9,173.5,38.7,170.8,38.7,167.6z'
    }),
    _react2.default.createElement('path', {
      d: 'M50.6,162c1.2,1.2,2.4,1.6,4,1.6c3.2,0,5.6-2.4,5.6-5.6l0-41.3c0-3.2-2.4-5.6-5.6-5.6c-3.2,0-5.6,2.4-5.6,5.6l0,41.3 C49,159.6,49.8,161.2,50.6,162z'
    }),
    _react2.default.createElement('path', {
      d: 'M163,107.6c0-3.2-2.4-5.6-5.6-5.6c-3.2,0-5.6,2.4-5.6,5.6V168c0,1.6,0.8,3.2,1.6,4c1.2,1.2,2.4,1.6,4,1.6 c3.2,0,5.6-2.4,5.6-5.6V107.6z'
    }),
    _react2.default.createElement('path', {
      d: 'M137.6,117.1c0-3.2-2.4-5.6-5.6-5.6s-5.6,2.4-5.6,5.6v41.3c0,1.6,0.8,3.2,1.6,4c1.2,1.2,2.4,1.6,4,1.6 c3.2,0,5.6-2.4,5.6-5.6L137.6,117.1z'
    }),
    _react2.default.createElement('path', {
      d: 'M188.4,117.1c0-3.2-2.4-5.6-5.6-5.6c-3.2,0-5.6,2.4-5.6,5.6v41.3c0,1.6,0.8,3.2,1.6,4c0.8,0.8,2.4,1.6,4,1.6 c3.2,0,5.6-2.4,5.6-5.6V117.1z'
    }),
    _react2.default.createElement('path', {
      d: 'M158.2,267.3c-2,0-4-0.9-5.5-2.3c-3.2-3.2-3.2-8.1,0-11.2l41.7-41.7c3.2-3.2,8.1-3.2,11.2,0c3.2,3.2,3.2,8.1,0,11.2 l-42,41.7C162.2,266.5,160.2,267.3,158.2,267.3L158.2,267.3z'
    }),
    _react2.default.createElement('path', {
      d: 'M158.2,267.3c-2,0-4-0.9-5.5-2.3L111,223.3c-3.2-3.2-3.2-8.1,0-11.2c3.2-3.2,8.1-3.2,11.2,0l41.7,41.7 c3.2,3.2,3.2,8.1,0,11.2C162.2,266.5,160.2,267.3,158.2,267.3z'
    }),
    _react2.default.createElement('path', {
      d: 'M116.4,67.4c-2,0-4-0.9-5.5-2.3c-3.2-3.2-3.2-8.1,0-11.2l41.7-41.4c3.2-3.2,8.1-3.2,11.2,0c3.2,3.2,3.2,8.1,0,11.2 l-41.7,41.4C120.5,66.5,118.5,67.4,116.4,67.4z'
    }),
    _react2.default.createElement('path', {
      d: 'M199.9,67.4c-2,0-4-0.9-5.5-2.3l-41.7-41.7c-3.2-3.2-3.2-8.1,0-11.2c3.2-3.2,8.1-3.2,11.2,0l41.7,41.7 c3.2,3.2,3.2,8.1,0,11.2C203.9,66.5,201.9,67.4,199.9,67.4z'
    })
  );
};

exports.default = (0, _styles.withStyles)(styles)(ExpressionIcon);