'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    heading: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      fontSize: '1rem'
    },
    subheading: {
      color: theme.palette.grey[800],
      fontSize: '0.75rem'
    },
    extra: {
      color: theme.palette.grey[600],
      fontSize: '0.65rem'
    },
    proportionContainer: {
      width: '100%'
    },
    proportion: {
      height: '2px',
      float: 'left',
      borderBottom: '2px solid ' + theme.palette.secondary.main
    },
    proportionRemainder: {
      height: '2px',
      borderBottom: '2px solid ' + theme.palette.grey[100],
      width: '100%'
    },
    count: {
      float: 'right'
    }
  };
};

var SearchOption = function SearchOption(_ref) {
  var classes = _ref.classes,
      heading = _ref.heading,
      subheading = _ref.subheading,
      extra = _ref.extra,
      count = _ref.count,
      proportion = _ref.proportion;
  return _react2.default.createElement(
    _Grid2.default,
    { container: true },
    _react2.default.createElement(
      _Grid2.default,
      { item: true, xs: 12 },
      _react2.default.createElement(
        _Typography2.default,
        { variant: 'body1' },
        _react2.default.createElement(
          'span',
          { className: classes.heading },
          heading
        ),
        '  ',
        _react2.default.createElement(
          'span',
          { className: classes.subheading },
          subheading
        ),
        count ? _react2.default.createElement(
          'span',
          { className: classes.count },
          count
        ) : null
      )
    ),
    _react2.default.createElement(
      _Grid2.default,
      { item: true, xs: 12 },
      _react2.default.createElement(
        _Typography2.default,
        { variant: 'body1', className: classes.extra },
        extra
      ),
      proportion ? _react2.default.createElement(
        'div',
        { className: classes.proportionContainer },
        _react2.default.createElement('div', {
          className: classes.proportion,
          style: { width: proportion * 100 + '%' }
        }),
        _react2.default.createElement('div', { className: classes.proportionRemainder })
      ) : null
    )
  );
};

exports.default = (0, _styles.withStyles)(styles)(SearchOption);