'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('@material-ui/core/styles');

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Placeholder = require('./Placeholder');

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _NoOptionsMessage = require('./NoOptionsMessage');

var _NoOptionsMessage2 = _interopRequireDefault(_NoOptionsMessage);

var _SingleValue = require('./SingleValue');

var _SingleValue2 = _interopRequireDefault(_SingleValue);

var _ValueContainer = require('./ValueContainer');

var _ValueContainer2 = _interopRequireDefault(_ValueContainer);

var _MenuFilter = require('./MenuFilter');

var _MenuFilter2 = _interopRequireDefault(_MenuFilter);

var _MultiValue = require('./MultiValue');

var _MultiValue2 = _interopRequireDefault(_MultiValue);

var _OptionFilter = require('./OptionFilter');

var _OptionFilter2 = _interopRequireDefault(_OptionFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      minWidth: '70px'
    },
    wide: {
      minWidth: '300px'
    }
  };
};

var IndicatorSeparator = function IndicatorSeparator() {
  return null;
};

var ClearIndicator = function ClearIndicator() {
  return null;
};

var OptionContainer = function OptionContainer(props) {
  var children = props.children,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      isFocused = props.isFocused,
      isSelected = props.isSelected;

  return _react2.default.createElement(
    _MenuItem2.default,
    _extends({
      buttonRef: innerRef,
      selected: isFocused,
      component: 'div',
      style: {
        fontWeight: isSelected ? 500 : 400,
        maxWidth: '800px',
        padding: 0,
        height: 'auto'
      }
    }, innerProps),
    children
  );
};

var InputComponent = function InputComponent(_ref) {
  var inputRef = _ref.inputRef,
      rest = _objectWithoutProperties(_ref, ['inputRef']);

  return _react2.default.createElement('div', _extends({ ref: inputRef }, rest));
};

function Control(props) {
  return _react2.default.createElement(_TextField2.default, _extends({
    fullWidth: true,
    InputProps: {
      inputComponent: InputComponent,
      inputProps: _extends({
        style: { display: 'flex', backgroundColor: '#eee' },
        inputRef: props.innerRef,
        children: props.children
      }, props.innerProps)
    }
  }, props.selectProps.textFieldProps));
}

var Autocomplete = function (_React$Component) {
  _inherits(Autocomplete, _React$Component);

  function Autocomplete() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Autocomplete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      value: null
    }, _this.handleChange = function (value) {
      _this.setState({ value: value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Autocomplete, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme,
          placeholder = _props.placeholder,
          options = _props.options,
          multiple = _props.multiple,
          value = _props.value,
          handleSelectOption = _props.handleSelectOption,
          getOptionLabel = _props.getOptionLabel,
          getOptionValue = _props.getOptionValue,
          OptionComponent = _props.OptionComponent,
          wide = _props.wide;


      var selectStyles = {
        input: function input(base) {
          return _extends({}, base, {
            color: theme.palette.text.primary
          });
        },
        menuPortal: function menuPortal(base) {
          return _extends({}, base, { zIndex: 9999 });
        }
      };

      var Option = function Option(_ref3) {
        var data = _ref3.data,
            children = _ref3.children,
            isSelected = _ref3.isSelected,
            rest = _objectWithoutProperties(_ref3, ['data', 'children', 'isSelected']);

        return _react2.default.createElement(
          OptionContainer,
          rest,
          OptionComponent ? _react2.default.createElement(
            OptionComponent,
            { data: data },
            children
          ) : _react2.default.createElement(
            _OptionFilter2.default,
            { data: data },
            children
          )
        );
      };

      var components = {
        Control: Control,
        NoOptionsMessage: _NoOptionsMessage2.default,
        Placeholder: _Placeholder2.default,
        SingleValue: _SingleValue2.default,
        ValueContainer: _ValueContainer2.default,
        Menu: _MenuFilter2.default,
        Option: Option,
        MultiValue: _MultiValue2.default,
        IndicatorSeparator: IndicatorSeparator,
        ClearIndicator: ClearIndicator
      };

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(classes.root, _defineProperty({}, classes.wide, wide)) },
        _react2.default.createElement(_reactSelect2.default, {
          options: options,
          styles: selectStyles,
          components: components,
          value: value,
          onChange: handleSelectOption,
          placeholder: placeholder,
          isMulti: multiple,
          hideSelectedOptions: false,
          getOptionLabel: getOptionLabel,
          getOptionValue: getOptionValue,
          menuPortalTarget: document.body,
          menuPlacement: 'auto',
          menuPosition: 'absolute'
        })
      );
    }
  }]);

  return Autocomplete;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles, { withTheme: true })(Autocomplete);