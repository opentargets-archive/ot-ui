'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    option: {
      fontSize: '0.8rem',
      padding: '0 5px',
      marginLeft: '2px',
      marginBottom: '2px',
      fontWeight: 400,
      borderLeft: '4px solid ' + theme.palette.grey[500]
    },
    optionChained: {
      borderLeft: '4px solid ' + theme.palette.secondary.main,
      fontWeight: 500
    },
    optionSelected: {
      borderLeft: '4px solid ' + theme.palette.primary.main,
      fontWeight: 500
    }
  };
};

var Option = function Option(_ref) {
  var _classNames;

  var classes = _ref.classes,
      children = _ref.children,
      data = _ref.data;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(classes.option, (_classNames = {}, _defineProperty(_classNames, classes.optionChained, data.chained), _defineProperty(_classNames, classes.optionSelected, data.selected), _classNames))
    },
    children
  );
};

exports.default = (0, _styles.withStyles)(styles)(Option);