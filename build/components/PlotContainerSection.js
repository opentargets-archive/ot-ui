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
    plotContainerSection: {
      padding: '4px 0',
      borderBottom: '1px solid ' + theme.palette.grey[300]
    }
  };
};

var PlotContainerSection = function PlotContainerSection(_ref) {
  var classes = _ref.classes,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: classes.plotContainerSection },
    children
  );
};

exports.default = (0, _styles.withStyles)(styles)(PlotContainerSection);