'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _AppBar = require('@material-ui/core/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@material-ui/core/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _OpenTargetsTitle = require('./OpenTargetsTitle');

var _OpenTargetsTitle2 = _interopRequireDefault(_OpenTargetsTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    navbar: {
      // background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${
      //   theme.palette.primary.light
      // } 90%)`,
      backgroundColor: theme.palette.primary.main,
      margin: 0,
      width: '100%'
    },
    navbarHomepage: {
      left: 0,
      top: 0,
      position: 'absolute',
      background: 'none',
      boxShadow: 'none'
    },
    flex: {
      flexGrow: 1
    },
    menuExternalLinkContainer: {
      fontSize: '1rem',
      '&:first-of-type': {
        marginLeft: '1rem'
      },
      '&:not(:last-child)': {
        marginRight: '1rem'
      }
    },
    menuExternalLink: {
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.secondary.main
      }
    }
  };
};

var MenuExternalLink = function MenuExternalLink(_ref) {
  var classes = _ref.classes,
      href = _ref.href,
      children = _ref.children;
  return _react2.default.createElement(
    _Typography2.default,
    { color: 'inherit', className: classes.menuExternalLinkContainer },
    _react2.default.createElement(
      'a',
      {
        target: '_blank',
        rel: 'noopener noreferrer',
        href: href,
        className: classes.menuExternalLink
      },
      children
    )
  );
};

var NavBar = function NavBar(_ref2) {
  var classes = _ref2.classes,
      name = _ref2.name,
      search = _ref2.search,
      docs = _ref2.docs,
      contact = _ref2.contact,
      homepage = _ref2.homepage;
  return _react2.default.createElement(
    _AppBar2.default,
    {
      className: (0, _classnames2.default)(classes.navbar, _defineProperty({}, classes.navbarHomepage, homepage)),
      position: 'static',
      color: 'primary'
    },
    _react2.default.createElement(
      _Toolbar2.default,
      { variant: 'dense' },
      homepage ? null : _react2.default.createElement(
        _Button2.default,
        { component: _reactRouterDom.Link, to: '/', color: 'inherit' },
        _react2.default.createElement(_OpenTargetsTitle2.default, { name: name })
      ),
      _react2.default.createElement('div', { className: classes.flex }),
      search ? search : null,
      _react2.default.createElement(
        MenuExternalLink,
        { classes: classes, href: docs },
        'Docs'
      ),
      _react2.default.createElement(
        MenuExternalLink,
        { classes: classes, href: contact },
        'Contact'
      )
    )
  );
};

exports.default = (0, _styles.withStyles)(styles)(NavBar);