'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fileSaver = require('file-saver');

var _fileSaver2 = _interopRequireDefault(_fileSaver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

var downloadTable = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref5) {
    var rows = _ref5.rows,
        headerMap = _ref5.headerMap,
        format = _ref5.format,
        filenameStem = _ref5.filenameStem;
    var data, contentString, blob;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof rows === 'function')) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return rows();

          case 3:
            data = _context.sent;

            rows = data;

          case 5:
            if (!(!rows || rows.length === 0)) {
              _context.next = 8;
              break;
            }

            console.info('Nothing to download.');
            return _context.abrupt('return');

          case 8:
            contentString = asContentString({ rows: rows, headerMap: headerMap, format: format });
            blob = new Blob([contentString], {
              type: asMimeType(format)
            });

            _fileSaver2.default.saveAs(blob, filenameStem + '.' + format, { autoBOM: false });

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function downloadTable(_x) {
    return _ref6.apply(this, arguments);
  };
}();

exports.default = downloadTable;