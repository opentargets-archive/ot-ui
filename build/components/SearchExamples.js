'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _styles = require('@material-ui/core/styles');

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  examplebutton: {
    margin: '1rem',
    textTransform: 'none'
  },
  row: {
    display: 'flex',
    marginTop: '1rem',
    justifyContent: 'center'
  }
};

var SearchExamples = function SearchExamples(_ref) {
  var classes = _ref.classes,
      examples = _ref.examples;

  return _react2.default.createElement(
    'div',
    { className: classes.row },
    examples.map(function (example) {
      return _react2.default.createElement(
        _Button2.default,
        {
          key: example.url,
          className: classes.examplebutton,
          variant: 'outlined',
          size: 'small',
          color: 'primary',
          component: _reactRouterDom.Link,
          to: example.url
        },
        example.label
      );
    })
  );
};

exports.default = (0, _styles.withStyles)(styles)(SearchExamples);