'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Async = require('react-select/lib/Async');

var _Async2 = _interopRequireDefault(_Async);

var _styles = require('@material-ui/core/styles');

var _Placeholder = require('./Placeholder');

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _NoOptionsMessage = require('./NoOptionsMessage');

var _NoOptionsMessage2 = _interopRequireDefault(_NoOptionsMessage);

var _Control = require('./Control');

var _Control2 = _interopRequireDefault(_Control);

var _SingleValue = require('./SingleValue');

var _SingleValue2 = _interopRequireDefault(_SingleValue);

var _ValueContainer = require('./ValueContainer');

var _ValueContainer2 = _interopRequireDefault(_ValueContainer);

var _DropdownIndicator = require('./DropdownIndicator');

var _DropdownIndicator2 = _interopRequireDefault(_DropdownIndicator);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _OptionContainer = require('./OptionContainer');

var _OptionContainer2 = _interopRequireDefault(_OptionContainer);

var _GroupHeading = require('./GroupHeading');

var _GroupHeading2 = _interopRequireDefault(_GroupHeading);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      minWidth: '450px'
    }
  };
};

var IndicatorSeparator = function IndicatorSeparator() {
  return null;
};

var Search = function Search(_ref) {
  var classes = _ref.classes,
      theme = _ref.theme,
      OptionComponent = _ref.optionComponent,
      onInputChange = _ref.onInputChange,
      onSelectOption = _ref.onSelectOption,
      onFocus = _ref.onFocus,
      value = _ref.value,
      placeholder = _ref.placeholder;

  var selectStyles = {
    input: function input(base) {
      return _extends({}, base, {
        color: theme.palette.text.primary
      });
    }
  };

  var Option = function Option(props) {
    return _react2.default.createElement(
      _OptionContainer2.default,
      props,
      _react2.default.createElement(OptionComponent, { data: props.data })
    );
  };

  var components = {
    Option: Option,
    Control: _Control2.default,
    NoOptionsMessage: _NoOptionsMessage2.default,
    Placeholder: _Placeholder2.default,
    SingleValue: _SingleValue2.default,
    ValueContainer: _ValueContainer2.default,
    Menu: _Menu2.default,
    DropdownIndicator: _DropdownIndicator2.default,
    GroupHeading: _GroupHeading2.default,
    Group: _Group2.default,
    IndicatorSeparator: IndicatorSeparator
  };

  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(_Async2.default, {
      loadOptions: onInputChange,
      styles: selectStyles,
      components: components,
      value: value,
      onChange: onSelectOption,
      onFocus: onFocus,
      placeholder: placeholder
    })
  );
};

exports.default = (0, _styles.withStyles)(styles, { withTheme: true })(Search);