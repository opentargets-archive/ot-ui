'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fileSaver = require('file-saver');

var _fileSaver2 = _interopRequireDefault(_fileSaver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var UNEXPECTED_FORMAT = 'Unexpected format. Supported options are csv, tsv and json.';

var pick = function pick(object, keys) {
  return keys.reduce(function (o, k) {
    // take into account optional export() function, which takes precedence as per other download formats
    o[k.id] = k.export ? k.export(object) : object[k.id];
    return o;
  }, {});
};

var quoteIfString = function quoteIfString(d) {
  return typeof d === 'string' ? '"' + d + '"' : d;
};

var asJSONString = function asJSONString(_ref) {
  var rows = _ref.rows,
      headerMap = _ref.headerMap;

  // use the full headerMap which contain optional export() function for each header
  var rowsHeadersOnly = rows.map(function (row) {
    return pick(row, headerMap);
  });
  return JSON.stringify(rowsHeadersOnly);
};

var asCSVString = function asCSVString(_ref2) {
  var rows = _ref2.rows,
      headerMap = _ref2.headerMap;

  var separator = ',';
  var lineSeparator = '\n';
  var headersString = headerMap.map(function (d) {
    return quoteIfString(d.label);
  }).join(separator);
  var rowsArray = rows.map(function (row) {
    return headerMap.map(function (header) {
      return quoteIfString(header.export ? header.export(row) : row[header.id]);
    }).join(separator);
  });
  return [headersString].concat(_toConsumableArray(rowsArray)).join(lineSeparator);
};

var asTSVString = function asTSVString(_ref3) {
  var rows = _ref3.rows,
      headerMap = _ref3.headerMap;

  var separator = '\t';
  var lineSeparator = '\n';
  var headersString = headerMap.map(function (d) {
    return d.label;
  }).join(separator);
  var rowsArray = rows.map(function (row) {
    return headerMap.map(function (header) {
      return header.export ? header.export(row) : row[header.id];
    }).join(separator);
  });
  return [headersString].concat(_toConsumableArray(rowsArray)).join(lineSeparator);
};

var asContentString = function asContentString(_ref4) {
  var rows = _ref4.rows,
      headerMap = _ref4.headerMap,
      format = _ref4.format;

  switch (format) {
    case 'json':
      return asJSONString({ rows: rows, headerMap: headerMap });
    case 'csv':
      return asCSVString({ rows: rows, headerMap: headerMap });
    case 'tsv':
      return asTSVString({ rows: rows, headerMap: headerMap });
    default:
      throw Error(UNEXPECTED_FORMAT);
  }
};

var asMimeType = function asMimeType(format) {
  switch (format) {
    case 'json':
      return 'application/json;charset=utf-8';
    case 'csv':
      return 'text/csv;charset=utf-8';
    case 'tsv':
      return 'text/tab-separated-values;charset=utf-8';
    default:
      throw Error(UNEXPECTED_FORMAT);
  }
};

var downloadTable = function downloadTable(_ref5) {
  var rows = _ref5.rows,
      headerMap = _ref5.headerMap,
      format = _ref5.format,
      filenameStem = _ref5.filenameStem;

  if (!rows || rows.length === 0) {
    console.info('Nothing to download.');
    return;
  }

  var contentString = asContentString({ rows: rows, headerMap: headerMap, format: format });
  var blob = new Blob([contentString], {
    type: asMimeType(format)
  });
  _fileSaver2.default.saveAs(blob, filenameStem + '.' + format, { autoBOM: false });
};

exports.default = downloadTable;