'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CssBaseline = require('@material-ui/core/CssBaseline');

var _CssBaseline2 = _interopRequireDefault(_CssBaseline);

var _styles = require('@material-ui/core/styles');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _setupIcons = require('../icons/setupIcons');

var _setupIcons2 = _interopRequireDefault(_setupIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OtUiThemeProvider = function (_React$Component) {
  _inherits(OtUiThemeProvider, _React$Component);

  function OtUiThemeProvider() {
    _classCallCheck(this, OtUiThemeProvider);

    return _possibleConstructorReturn(this, (OtUiThemeProvider.__proto__ || Object.getPrototypeOf(OtUiThemeProvider)).apply(this, arguments));
  }

  _createClass(OtUiThemeProvider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _setupIcons2.default)();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: _theme2.default },
        _react2.default.createElement(_CssBaseline2.default, null),
        children
      );
    }
  }]);

  return OtUiThemeProvider;
}(_react2.default.Component);

exports.default = OtUiThemeProvider;