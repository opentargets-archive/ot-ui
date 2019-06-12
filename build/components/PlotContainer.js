'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _LinearProgress = require('@material-ui/core/LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _styles = require('@material-ui/core/styles');

var _PlotContainerSection = require('./PlotContainerSection');

var _PlotContainerSection2 = _interopRequireDefault(_PlotContainerSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles() {
  return {
    plotContainer: {
      marginBottom: '15px'
    },
    leftContainer: {
      marginLeft: '4px'
    },
    rightContainer: {
      marginRight: '4px'
    }
  };
};

var PlotContainer = function PlotContainer(_ref) {
  var classes = _ref.classes,
      loading = _ref.loading,
      error = _ref.error,
      left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      children = _ref.children;
  return _react2.default.createElement(
    _Paper2.default,
    { className: classes.plotContainer, elevation: 0 },
    left || center || right ? _react2.default.createElement(
      _PlotContainerSection2.default,
      null,
      _react2.default.createElement(
        _Grid2.default,
        { container: true, justify: 'space-between', spacing: 8 },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, className: classes.leftContainer },
          left
        ),
        _react2.default.createElement(
          _Grid2.default,
          { item: true },
          center
        ),
        _react2.default.createElement(
          _Grid2.default,
          { item: true, className: classes.rightContainer },
          right
        )
      )
    ) : null,
    loading ? _react2.default.createElement(_LinearProgress2.default, null) : null,
    error ? _react2.default.createElement(
      _PlotContainerSection2.default,
      null,
      _react2.default.createElement(
        'div',
        { align: 'center' },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'subtitle1', color: 'error' },
          error.graphQLErrors.map(function (_ref2, i) {
            var message = _ref2.message;
            return _react2.default.createElement(
              'span',
              { key: i },
              message
            );
          })
        )
      )
    ) : null,
    children
  );
};

exports.default = (0, _styles.withStyles)(styles)(PlotContainer);