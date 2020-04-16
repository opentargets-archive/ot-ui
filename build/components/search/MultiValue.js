'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _Chip = require('@material-ui/core/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _Cancel = require('@material-ui/icons/Cancel');

var _Cancel2 = _interopRequireDefault(_Cancel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    miniChip: {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      margin: '1px',
      height: '20px',
      fontSize: '0.7rem'
    },
    deleteIcon: {
      fontSize: '16px'
    }
  };
};

var Chip = function Chip(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      selectProps = _ref.selectProps,
      removeProps = _ref.removeProps,
      data = _ref.data;
  return _react2.default.createElement(_Chip2.default, {
    key: selectProps.getOptionValue(data),
    className: classes.miniChip,
    tabIndex: -1,
    label: children,
    onDelete: removeProps.onClick,
    deleteIcon: _react2.default.createElement(_Cancel2.default, _extends({ className: classes.deleteIcon }, removeProps))
  });
};

exports.default = (0, _styles.withStyles)(styles)(Chip);