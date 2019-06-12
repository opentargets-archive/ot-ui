'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles() {
  return {
    select: {
      minWidth: '300px'
    }
  };
};

var MultiSelect = function MultiSelect(_ref) {
  var classes = _ref.classes,
      value = _ref.value,
      options = _ref.options,
      handleChange = _ref.handleChange,
      renderValue = _ref.renderValue,
      multiple = _ref.multiple;
  return _react2.default.createElement(
    _Select2.default,
    {
      className: classes.select,
      multiple: multiple,
      autoWidth: true,
      value: value,
      onChange: handleChange,
      renderValue: renderValue,
      displayEmpty: true
    },
    options.map(function (d) {
      return _react2.default.createElement(
        _MenuItem2.default,
        { key: d.value, value: d.value },
        d.label
      );
    })
  );
};

exports.default = (0, _styles.withStyles)(styles)(MultiSelect);