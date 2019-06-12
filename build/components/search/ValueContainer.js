'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center'
  }
};

var ValueContainer = function ValueContainer(_ref) {
  var classes = _ref.classes,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    { className: classes.valueContainer },
    children
  );
};

exports.default = (0, _styles.withStyles)(styles)(ValueContainer);