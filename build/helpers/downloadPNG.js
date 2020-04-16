'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fileSaver = require('file-saver');

var _fileSaver2 = _interopRequireDefault(_fileSaver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var downloadPNG = function downloadPNG(_ref) {
  var canvasNode = _ref.canvasNode,
      filenameStem = _ref.filenameStem;

  if (!canvasNode) {
    console.info('Nothing to download.');
    return;
  }
  canvasNode.toBlob(function (blob) {
    _fileSaver2.default.saveAs(blob, filenameStem + '.png');
  });
};

exports.default = downloadPNG;