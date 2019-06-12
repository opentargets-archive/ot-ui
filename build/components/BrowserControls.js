'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _KeyboardArrowLeft = require('@material-ui/icons/KeyboardArrowLeft');

var _KeyboardArrowLeft2 = _interopRequireDefault(_KeyboardArrowLeft);

var _KeyboardArrowRight = require('@material-ui/icons/KeyboardArrowRight');

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

var _Add = require('@material-ui/icons/Add');

var _Add2 = _interopRequireDefault(_Add);

var _Remove = require('@material-ui/icons/Remove');

var _Remove2 = _interopRequireDefault(_Remove);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    selectContainer: {
      paddingLeft: '4px',
      paddingRight: '4px'
    }
  };
};

var BrowserControls = function BrowserControls(_ref) {
  var classes = _ref.classes,
      handlePanLeft = _ref.handlePanLeft,
      handlePanRight = _ref.handlePanRight,
      handleZoomIn = _ref.handleZoomIn,
      handleZoomOut = _ref.handleZoomOut,
      displayTypeValue = _ref.displayTypeValue,
      displayTypeOptions = _ref.displayTypeOptions,
      displayFinemappingValue = _ref.displayFinemappingValue,
      displayFinemappingOptions = _ref.displayFinemappingOptions,
      handleDisplayTypeChange = _ref.handleDisplayTypeChange,
      handleDisplayFinemappingChange = _ref.handleDisplayFinemappingChange,
      _ref$disabledZoomOut = _ref.disabledZoomOut,
      disabledZoomOut = _ref$disabledZoomOut === undefined ? false : _ref$disabledZoomOut;
  return _react2.default.createElement(
    _Grid2.default,
    { container: true, alignItems: 'center' },
    _react2.default.createElement(
      _Grid2.default,
      { item: true },
      _react2.default.createElement(
        _IconButton2.default,
        { onClick: handlePanLeft },
        _react2.default.createElement(_KeyboardArrowLeft2.default, null)
      )
    ),
    _react2.default.createElement(
      _Grid2.default,
      { item: true },
      _react2.default.createElement(
        _IconButton2.default,
        { onClick: handlePanRight },
        _react2.default.createElement(_KeyboardArrowRight2.default, null)
      )
    ),
    _react2.default.createElement(
      _Grid2.default,
      { item: true },
      _react2.default.createElement(
        _IconButton2.default,
        { onClick: handleZoomIn },
        _react2.default.createElement(_Add2.default, null)
      )
    ),
    _react2.default.createElement(
      _Grid2.default,
      { item: true },
      _react2.default.createElement(
        _IconButton2.default,
        { onClick: handleZoomOut, disabled: disabledZoomOut },
        _react2.default.createElement(_Remove2.default, null)
      )
    ),
    _react2.default.createElement(
      _Grid2.default,
      { item: true },
      _react2.default.createElement(
        'div',
        { className: classes.selectContainer },
        _react2.default.createElement(
          _Select2.default,
          { value: displayTypeValue, onChange: handleDisplayTypeChange },
          displayTypeOptions.map(function (d) {
            return _react2.default.createElement(
              _MenuItem2.default,
              { key: d.value, value: d.value },
              d.label
            );
          })
        )
      )
    ),
    _react2.default.createElement(
      _Grid2.default,
      { item: true },
      _react2.default.createElement(
        'div',
        { className: classes.selectContainer },
        _react2.default.createElement(
          _Select2.default,
          {
            value: displayFinemappingValue,
            onChange: handleDisplayFinemappingChange
          },
          displayFinemappingOptions.map(function (d) {
            return _react2.default.createElement(
              _MenuItem2.default,
              { key: d.value, value: d.value },
              d.label
            );
          })
        )
      )
    )
  );
};

exports.default = (0, _styles.withStyles)(styles)(BrowserControls);