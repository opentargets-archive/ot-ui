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

var _ModelSchematic = require('./ModelSchematic');

var _ModelSchematic2 = _interopRequireDefault(_ModelSchematic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: '1rem',
      marginBottom: '1rem'
    },
    hr: {
      marginTop: '1rem'
    },
    flex: {
      flexGrow: 1
    }
  };
};

var SectionHeading = function SectionHeading(_ref) {
  var classes = _ref.classes,
      heading = _ref.heading,
      subheading = _ref.subheading,
      entities = _ref.entities;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement('hr', { className: classes.hr }),
    _react2.default.createElement(
      'div',
      { className: classes.container },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'h5' },
          heading
        ),
        _react2.default.createElement(
          _Grid2.default,
          { container: true, justify: 'space-between' },
          _react2.default.createElement(
            _Grid2.default,
            { item: true },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'subtitle1' },
              subheading
            )
          )
        )
      ),
      _react2.default.createElement('div', { className: classes.flex }),
      entities ? _react2.default.createElement(_ModelSchematic2.default, { entities: entities }) : null
    )
  );
};

exports.default = (0, _styles.withStyles)(styles)(SectionHeading);