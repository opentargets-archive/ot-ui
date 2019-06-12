'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fileSaver = require('file-saver');

var _fileSaver2 = _interopRequireDefault(_fileSaver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var downloadSVG = function downloadSVG(_ref) {
  var svgNode = _ref.svgNode,
      filenameStem = _ref.filenameStem;

  if (!svgNode) {
    console.info('Nothing to download.');
    return;
  }

  var contentString = svgNode.outerHTML;
  var blob = new Blob([contentString], {
    type: 'application/svg+xml'
  });
  _fileSaver2.default.saveAs(blob, filenameStem + '.svg');
};

exports.default = downloadSVG;