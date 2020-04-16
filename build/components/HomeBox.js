'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _styles = require('@material-ui/core/styles');

var _OpenTargetsTitle = require('./OpenTargetsTitle');

var _OpenTargetsTitle2 = _interopRequireDefault(_OpenTargetsTitle);

var _OtIcon = require('../icons/OtIcon');

var _OtIcon2 = _interopRequireDefault(_OtIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    homeboxContainer: {
      overflow: 'visible',
      padding: '30px 60px'
    },
    homeboxHeader: {
      textAlign: 'center'
    },
    title: {
      color: theme.palette.grey[700],
      bottom: '40px',
      fontSize: '30px',
      marginLeft: '7px',
      position: 'relative'
    }
  };
};

var HomeBox = function HomeBox(_ref) {
  var classes = _ref.classes,
      name = _ref.name,
      children = _ref.children;
  return _react2.default.createElement(
    _Grid2.default,
    { item: true, xs: 12, sm: 8, md: 8, lg: 8 },
    _react2.default.createElement(
      _Paper2.default,
      { className: classes.homeboxContainer },
      _react2.default.createElement(
        'div',
        { className: classes.homeboxHeader },
        _react2.default.createElement(_OtIcon2.default, null),
        _react2.default.createElement(_OpenTargetsTitle2.default, { className: classes.title, name: name })
      ),
      children
    )
  );
};

exports.default = (0, _styles.withStyles)(styles)(HomeBox);