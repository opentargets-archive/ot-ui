'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _downloadSVG = require('../helpers/downloadSVG');

var _downloadSVG2 = _interopRequireDefault(_downloadSVG);

var _PlotContainer = require('./PlotContainer');

var _PlotContainer2 = _interopRequireDefault(_PlotContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleSVGDownload = function handleSVGDownload(svgContainer, filenameStem) {
  var node = (0, _reactDom.findDOMNode)(svgContainer.current);
  var svgNode = node.nodeName === 'svg' ? node : node.querySelector('svg');
  (0, _downloadSVG2.default)({ svgNode: svgNode, filenameStem: filenameStem });
};

var DownloadSVGPlot = function DownloadSVGPlot(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      left = _ref.left,
      center = _ref.center,
      svgContainer = _ref.svgContainer,
      filenameStem = _ref.filenameStem,
      reportDownloadEvent = _ref.reportDownloadEvent,
      children = _ref.children;
  return _react2.default.createElement(
    _PlotContainer2.default,
    {
      loading: loading,
      error: error,
      left: left,
      center: center,
      right: _react2.default.createElement(
        _Grid2.default,
        { container: true, justify: 'flex-end', spacing: 1 },
        _react2.default.createElement(
          _Grid2.default,
          { item: true },
          _react2.default.createElement(
            _Button2.default,
            {
              variant: 'outlined',
              onClick: function onClick() {
                if (reportDownloadEvent) {
                  reportDownloadEvent();
                }
                handleSVGDownload(svgContainer, filenameStem);
              }
            },
            'SVG'
          )
        )
      )
    },
    children
  );
};

exports.default = DownloadSVGPlot;