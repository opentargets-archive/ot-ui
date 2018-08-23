import FileSaver from 'file-saver';

const UNEXPECTED_FORMAT =
  'Unexpected format. Supported options are csv, tsv and json.';

const pick = (object, keys) => {
  return keys.reduce(function(o, k) {
    o[k] = object[k];
    return o;
  }, {});
};

const quoteIfString = d => (typeof d === 'string' ? `"${d}"` : d);

const asJSONString = ({ rows, headerMap }) => {
  const headerKeys = headerMap.map(header => header.id);
  const rowsHeadersOnly = rows.map(row => pick(row, headerKeys));
  return JSON.stringify(rowsHeadersOnly);
};

const asCSVString = ({ rows, headerMap }) => {
  const headerKeys = headerMap.map(header => header.id);
  const headerLabels = headerMap.map(header => header.label);
  const separator = ',';
  const lineSeparator = '\n';
  const headersString = headerLabels.map(d => quoteIfString(d)).join(separator);
  const rowsArray = rows.map(row =>
    headerKeys.map(headerKey => quoteIfString(row[headerKey])).join(separator)
  );
  return [headersString, ...rowsArray].join(lineSeparator);
};

const asTSVString = ({ rows, headerMap }) => {
  const headerKeys = headerMap.map(header => header.id);
  const headerLabels = headerMap.map(header => header.label);
  const separator = '\t';
  const lineSeparator = '\n';
  const headersString = headerLabels.join(separator);
  const rowsArray = rows.map(row =>
    headerKeys.map(headerKey => row[headerKey]).join(separator)
  );
  return [headersString, ...rowsArray].join(lineSeparator);
};

const asContentString = ({ rows, headerMap, format }) => {
  switch (format) {
    case 'json':
      return asJSONString({ rows, headerMap });
    case 'csv':
      return asCSVString({ rows, headerMap });
    case 'tsv':
      return asTSVString({ rows, headerMap });
    default:
      throw Error(UNEXPECTED_FORMAT);
  }
};

const asMimeType = format => {
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

const downloadTable = ({ rows, headerMap, format, filenameStem }) => {
  if (!rows || rows.length === 0) {
    console.info('Nothing to download.');
    return;
  }

  const contentString = asContentString({ rows, headerMap, format });
  const blob = new Blob([contentString], {
    type: asMimeType(format),
  });
  FileSaver.saveAs(blob, `${filenameStem}.${format}`);
};

export default downloadTable;
