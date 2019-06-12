'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('@material-ui/core/styles');

var _Chip = require('@material-ui/core/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _Avatar = require('@material-ui/core/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    chip: {
      margin: theme.spacing.unit / 2,
      color: 'white'
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid white'
    },
    gene: {
      backgroundColor: theme.palette.gene
    },
    tagVariant: {
      backgroundColor: theme.palette.tagVariant
    },
    indexVariant: {
      backgroundColor: theme.palette.indexVariant
    },
    study: {
      backgroundColor: theme.palette.study
    }
  };
};

var AVATAR_MAP = {
  gene: 'G',
  variant: 'V',
  tagVariant: _react2.default.createElement(
    _Typography2.default,
    { color: 'inherit', style: { textAlign: 'center' } },
    _react2.default.createElement(
      'span',
      { style: { fontWeight: 'bold' } },
      'V',
      _react2.default.createElement(
        'sub',
        { style: { fontSize: '0.65em' } },
        'T'
      )
    )
  ),
  indexVariant: _react2.default.createElement(
    _Typography2.default,
    { color: 'inherit', style: { textAlign: 'center' } },
    _react2.default.createElement(
      'span',
      { style: { fontWeight: 'bold' } },
      'V',
      _react2.default.createElement(
        'sub',
        { style: { fontSize: '0.65em' } },
        'L'
      )
    )
  ),
  study: 'S'
};

var Chip = function Chip(_ref) {
  var classes = _ref.classes,
      type = _ref.type,
      label = _ref.label,
      onDelete = _ref.onDelete;
  return _react2.default.createElement(_Chip2.default, {
    avatar: _react2.default.createElement(
      _Avatar2.default,
      { className: classes.avatar },
      AVATAR_MAP[type]
    ),
    className: (0, _classnames2.default)(classes.chip, classes[type]),
    label: label,
    onDelete: onDelete
  });
};

exports.default = (0, _styles.withStyles)(styles)(Chip);