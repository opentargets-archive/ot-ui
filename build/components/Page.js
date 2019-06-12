'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    page: {
      background: theme.palette.grey['50'],
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      width: '100%'
    },
    gridContainer: {
      margin: 0,
      padding: '24px',
      width: '100%',
      flex: '1 0 auto'
    }
  };
};

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          header = _props.header,
          footer = _props.footer,
          children = _props.children;

      return _react2.default.createElement(
        'div',
        { className: classes.page },
        header,
        _react2.default.createElement(
          _Grid2.default,
          {
            container: true,
            justify: 'center',
            spacing: 24,
            className: classes.gridContainer
          },
          _react2.default.createElement(
            _Grid2.default,
            { item: true, xs: 12, md: 11 },
            children
          )
        ),
        footer
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

Page.propTypes = {
  /** The header component */
  header: _propTypes2.default.node,
  /** The footer component */
  footer: _propTypes2.default.node,
  /** The children (page content) */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};

Page.defaultProps = {
  header: null,
  footer: null,
  children: null
};

exports.Page = Page;
exports.default = (0, _styles.withStyles)(styles)(Page);