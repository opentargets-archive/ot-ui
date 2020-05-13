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

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _styles = require('@material-ui/core/styles');

var _downloadTable = require('../helpers/downloadTable');

var _downloadTable2 = _interopRequireDefault(_downloadTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles() {
  return {
    container: {
      marginBottom: '2px'
    },
    caption: {
      alignSelf: 'center'
    },
    downloadHeader: {
      marginTop: '7px'
    }
  };
};

function handleDownload(headers, rows, fileStem, format) {
  (0, _downloadTable2.default)({
    headerMap: headers,
    rows: rows,
    format: format,
    filenameStem: fileStem
  });
}

function DataDownloader(_ref) {
  var tableHeaders = _ref.tableHeaders,
      rows = _ref.rows,
      classes = _ref.classes,
      fileStem = _ref.fileStem;

  return _react2.default.createElement(
    _Grid2.default,
    {
      container: true,
      justify: 'flex-end',
      spacing: 1,
      className: classes.container
    },
    _react2.default.createElement(
      _Grid2.default,
      { item: true, className: classes.caption },
      _react2.default.createElement(
        _Typography2.default,
        { variant: 'caption', className: classes.downloadHeader },
        'Download table as'
      )
    ),
    _react2.default.createElement(
      _Grid2.default,
      { item: true },
      _react2.default.createElement(
        _Button2.default,
        {
          variant: 'outlined',
          onClick: function onClick() {
            return handleDownload(tableHeaders, rows, fileStem, 'json');
          }
        },
        'JSON'
      )
    ),
    _react2.default.createElement(
      _Grid2.default,
      { item: true },
      _react2.default.createElement(
        _Button2.default,
        {
          variant: 'outlined',
          onClick: function onClick() {
            return handleDownload(tableHeaders, rows, fileStem, 'csv');
          }
        },
        'CSV'
      )
    ),
    _react2.default.createElement(
      _Grid2.default,
      { item: true },
      _react2.default.createElement(
        _Button2.default,
        {
          variant: 'outlined',
          onClick: function onClick() {
            return handleDownload(tableHeaders, rows, fileStem, 'tsv');
          }
        },
        'TSV'
      )
    )
  );
}

exports.default = (0, _styles.withStyles)(styles)(DataDownloader);