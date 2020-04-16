'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = require('react-router-dom');

var _styles = require('@material-ui/core/styles');

var _Icon = require('@material-ui/core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    base: {
      fontFamily: 'Inter',
      fontSize: 'inherit',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    },
    baseDefault: {
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.primary.dark
      }
    },
    baseTooltip: {
      color: 'white',
      '&:hover': {
        color: theme.palette.primary.light
      },
      textDecoration: 'underline'
    },
    baseFooter: {
      color: 'white',
      '&:hover': {
        color: theme.palette.primary.light
      },
      display: 'flex',
      alignItems: 'center'
    },
    externalIcon: {
      fontSize: '70%',
      verticalAlign: 'baseline',
      marginLeft: '3px',
      width: 'auto',
      height: 'auto',
      display: 'inline'
    }
  };
};

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          _props$classes = _props.classes,
          classes = _props$classes === undefined ? {} : _props$classes,
          children = _props.children,
          to = _props.to,
          onClick = _props.onClick,
          external = _props.external,
          footer = _props.footer,
          tooltip = _props.tooltip,
          className = _props.className;

      return external ? _react2.default.createElement(
        'a',
        {
          className: (0, _classnames2.default)(classes.base, (_classNames = {}, _defineProperty(_classNames, classes.baseDefault, !footer && !tooltip), _defineProperty(_classNames, classes.baseFooter, footer), _defineProperty(_classNames, classes.baseTooltip, tooltip), _classNames), className),
          target: '_blank',
          rel: 'noopener noreferrer',
          href: to,
          onClick: onClick
        },
        children,
        footer ? null : _react2.default.createElement(_Icon2.default, {
          className: (0, _classnames2.default)('fa', 'fa-external-link-alt', classes.externalIcon)
        })
      ) : _react2.default.createElement(
        _reactRouterDom.Link,
        {
          className: (0, _classnames2.default)(classes.base, (_classNames2 = {}, _defineProperty(_classNames2, classes.baseDefault, !footer && !tooltip), _defineProperty(_classNames2, classes.baseFooter, footer), _defineProperty(_classNames2, classes.basetooltip, tooltip), _classNames2), className),
          to: to,
          onClick: onClick
        },
        children
      );
    }
  }]);

  return Link;
}(_react2.default.Component);

Link.propTypes = {
  /** Whether the link directs to an external site. */
  external: _propTypes2.default.bool,
  /** Whether the link is used within the footer section. */
  footer: _propTypes2.default.bool,
  /** Whether the link is used within a tooltip. */
  tooltip: _propTypes2.default.bool,
  /** The handler to call on click. */
  onClick: _propTypes2.default.func,
  /** The url to visit on clicking the link. */
  to: _propTypes2.default.string.isRequired
};

Link.defaultProps = {
  external: false,
  footer: false,
  tooltip: false,
  onClick: null,
  to: '/'
};

exports.Link = Link;
exports.default = (0, _styles.withStyles)(styles)(Link);