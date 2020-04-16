'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('@material-ui/core/styles');

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Table = require('@material-ui/core/Table');

var _Table2 = _interopRequireDefault(_Table);

var _TableHead = require('@material-ui/core/TableHead');

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableBody = require('@material-ui/core/TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableRow = require('@material-ui/core/TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableCell = require('@material-ui/core/TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TablePagination = require('@material-ui/core/TablePagination');

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _TableSortLabel = require('@material-ui/core/TableSortLabel');

var _TableSortLabel2 = _interopRequireDefault(_TableSortLabel);

var _Tooltip = require('@material-ui/core/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Badge = require('@material-ui/core/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FirstPage = require('@material-ui/icons/FirstPage');

var _FirstPage2 = _interopRequireDefault(_FirstPage);

var _LastPage = require('@material-ui/icons/LastPage');

var _LastPage2 = _interopRequireDefault(_LastPage);

var _KeyboardArrowLeft = require('@material-ui/icons/KeyboardArrowLeft');

var _KeyboardArrowLeft2 = _interopRequireDefault(_KeyboardArrowLeft);

var _KeyboardArrowRight = require('@material-ui/icons/KeyboardArrowRight');

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

var _Help = require('@material-ui/icons/Help');

var _Help2 = _interopRequireDefault(_Help);

var _PlotContainer = require('./PlotContainer');

var _PlotContainer2 = _interopRequireDefault(_PlotContainer);

var _PlotContainerSection = require('./PlotContainerSection');

var _PlotContainerSection2 = _interopRequireDefault(_PlotContainerSection);

var _downloadTable = require('../helpers/downloadTable');

var _downloadTable2 = _interopRequireDefault(_downloadTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PAGE_SIZE = 10;

var actionsStyles = function actionsStyles(theme) {
  return {
    root: {
      flexShrink: 0
    }
  };
};

var TablePaginationActions = function (_Component) {
  _inherits(TablePaginationActions, _Component);

  function TablePaginationActions() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TablePaginationActions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TablePaginationActions.__proto__ || Object.getPrototypeOf(TablePaginationActions)).call.apply(_ref, [this].concat(args))), _this), _this.handleFirstPageButtonClick = function (event) {
      _this.props.onChangePage(event, 0);
    }, _this.handleBackButtonClick = function (event) {
      var _this$props = _this.props,
          onChangePage = _this$props.onChangePage,
          page = _this$props.page;

      onChangePage(event, page - 1);
    }, _this.handleNextButtonClick = function (event) {
      var _this$props2 = _this.props,
          onChangePage = _this$props2.onChangePage,
          page = _this$props2.page;

      onChangePage(event, page + 1);
    }, _this.handleLastPageButtonClick = function (event) {
      var _this$props3 = _this.props,
          onChangePage = _this$props3.onChangePage,
          count = _this$props3.count,
          rowsPerPage = _this$props3.rowsPerPage;

      var lastPage = Math.ceil(count / rowsPerPage) - 1;
      onChangePage(event, lastPage);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TablePaginationActions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          count = _props.count,
          page = _props.page,
          rowsPerPage = _props.rowsPerPage,
          classes = _props.classes;

      var lastPage = Math.ceil(count / rowsPerPage) - 1;
      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _IconButton2.default,
          {
            onClick: this.handleFirstPageButtonClick,
            disabled: page === 0,
            'aria-label': 'First Page'
          },
          _react2.default.createElement(_FirstPage2.default, null)
        ),
        _react2.default.createElement(
          _IconButton2.default,
          {
            onClick: this.handleBackButtonClick,
            disabled: page === 0,
            'aria-label': 'Previous Page'
          },
          _react2.default.createElement(_KeyboardArrowLeft2.default, null)
        ),
        _react2.default.createElement(
          _IconButton2.default,
          {
            onClick: this.handleNextButtonClick,
            disabled: page >= lastPage,
            'aria-label': 'Next Page'
          },
          _react2.default.createElement(_KeyboardArrowRight2.default, null)
        ),
        _react2.default.createElement(
          _IconButton2.default,
          {
            onClick: this.handleLastPageButtonClick,
            disabled: page >= lastPage,
            'aria-label': 'Last Page'
          },
          _react2.default.createElement(_LastPage2.default, null)
        )
      );
    }
  }]);

  return TablePaginationActions;
}(_react.Component);

TablePaginationActions = (0, _styles.withStyles)(actionsStyles)(TablePaginationActions);

var getComparator = function getComparator(columns, sortBy, order) {
  var column = columns.find(function (col) {
    return col.id === sortBy;
  });

  if (column && column.comparator) {
    if (order === 'asc') {
      return column.comparator;
    }
    return function (a, b) {
      return -column.comparator(a, b);
    };
  }

  var comparatorValue = order === 'desc' ? 1 : -1;

  return function (a, b) {
    if (a[sortBy] === b[sortBy]) {
      return 0;
    }

    if (a[sortBy] === undefined || a[sortBy] === '' || a[sortBy] < b[sortBy]) {
      return comparatorValue;
    }

    if (b[sortBy] === undefined || b[sortBy] === '' || a[sortBy] > b[sortBy]) {
      return -comparatorValue;
    }
  };
};

var tableStyles = function tableStyles(theme) {
  return {
    tableWrapper: {
      overflowX: 'auto'
    },
    tooltipIcon: {
      fontSize: '1.2rem',
      paddingLeft: '0.6rem'
    },
    buttonMargin: {
      marginRight: '4px'
    },
    tableRow: {
      height: '31px'
    },
    tableRowFixed: {
      background: theme.palette.grey[300]
    },
    tableRowFilters: {
      verticalAlign: 'bottom'
    },
    tableCell: {
      padding: '0 12px 0 0',
      '&:first-child': {
        paddingLeft: '24px'
      },
      '&:last-child': {
        paddingRight: '24px'
      }
    },
    tableCellHeader: {
      paddingRight: '12px',
      paddingLeft: 0,
      '&:first-child': {
        paddingLeft: '24px'
      },
      '&:last-child': {
        paddingRight: '24px'
      }
    },
    tableCellHeaderVertical: {
      textAlign: 'center',
      verticalAlign: 'bottom'
    },
    tableCellVertical: {
      minWidth: '24px',
      width: '24px',
      paddingRight: 0
    },
    tableCellFill: {
      width: '100%'
    },
    verticalHeader: {
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)',
      whiteSpace: 'nowrap'
    },
    downloadHeader: {
      marginTop: '7px'
    }
  };
};

var OtTable = function (_Component2) {
  _inherits(OtTable, _Component2);

  function OtTable() {
    var _ref2;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, OtTable);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = OtTable.__proto__ || Object.getPrototypeOf(OtTable)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
      page: 0,
      sortBy: _this2.props.sortBy,
      order: _this2.props.order
    }, _this2.handleChangePage = function (event, page) {
      _this2.setState({
        page: page
      });
    }, _this2.selectSortColumn = function (sortBy) {
      var reportTableSortEvent = _this2.props.reportTableSortEvent;

      var order = 'desc';

      if (_this2.state.sortBy === sortBy && _this2.state.order === 'desc') {
        order = 'asc';
      }

      if (reportTableSortEvent) {
        reportTableSortEvent(sortBy, order);
      }

      _this2.setState({ sortBy: sortBy, order: order });
    }, _this2.handleTableDownload = function (format) {
      var _this2$props = _this2.props,
          columns = _this2$props.columns,
          data = _this2$props.data,
          downloadFileStem = _this2$props.downloadFileStem,
          excludeDownloadColumns = _this2$props.excludeDownloadColumns,
          reportTableDownloadEvent = _this2$props.reportTableDownloadEvent;


      if (reportTableDownloadEvent) {
        reportTableDownloadEvent(format);
      }

      var headerMap = excludeDownloadColumns ? columns.filter(function (column) {
        return !excludeDownloadColumns.includes(column.id);
      }) : columns;

      (0, _downloadTable2.default)({
        headerMap: headerMap,
        rows: data,
        format: format,
        filenameStem: downloadFileStem
      });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(OtTable, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          loading = _props2.loading,
          error = _props2.error,
          columns = _props2.columns,
          data = _props2.data,
          columnsFixed = _props2.columnsFixed,
          dataFixed = _props2.dataFixed,
          verticalHeaders = _props2.verticalHeaders,
          classes = _props2.classes,
          left = _props2.left,
          center = _props2.center,
          message = _props2.message,
          filters = _props2.filters,
          pageSize = _props2.pageSize;
      var _state = this.state,
          sortBy = _state.sortBy,
          order = _state.order,
          page = _state.page;

      var filterRow = filters ? _react2.default.createElement(
        _TableRow2.default,
        { className: classes.tableRowFilters },
        columns.map(function (column) {
          return _react2.default.createElement(
            _TableCell2.default,
            { key: column.id, className: classes.tableCellHeader },
            column.renderFilter ? column.renderFilter() : null
          );
        })
      ) : null;
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
                  onClick: this.handleTableDownload.bind(null, 'json')
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
                  onClick: this.handleTableDownload.bind(null, 'csv')
                },
                'CSV'
              )
            ),
            _react2.default.createElement(
              _Grid2.default,
              { item: true, className: classes.buttonMargin },
              _react2.default.createElement(
                _Button2.default,
                {
                  variant: 'outlined',
                  onClick: this.handleTableDownload.bind(null, 'tsv')
                },
                'TSV'
              )
            )
          )
        },
        message ? _react2.default.createElement(
          _PlotContainerSection2.default,
          null,
          _react2.default.createElement(
            'div',
            { align: 'center' },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'subtitle1' },
              message
            )
          )
        ) : null,
        _react2.default.createElement(
          _PlotContainerSection2.default,
          null,
          _react2.default.createElement(
            'div',
            { className: classes.tableWrapper },
            _react2.default.createElement(
              _Table2.default,
              null,
              _react2.default.createElement(
                _TableHead2.default,
                null,
                _react2.default.createElement(
                  _TableRow2.default,
                  null,
                  columns.map(function (column) {
                    var _classNames;

                    return _react2.default.createElement(
                      _TableCell2.default,
                      {
                        key: column.id,
                        className: (0, _classnames2.default)(classes.tableCellHeader, (_classNames = {}, _defineProperty(_classNames, classes.tableCellHeaderVertical, column.verticalHeader), _defineProperty(_classNames, classes.tableCellVertical, column.verticalHeader), _classNames))
                      },
                      _react2.default.createElement(
                        _TableSortLabel2.default,
                        {
                          active: column.id === sortBy,
                          direction: order,
                          onClick: _this3.selectSortColumn.bind(null, column.id),
                          className: column.verticalHeader ? classes.verticalHeader : null
                        },
                        column.tooltip ? _react2.default.createElement(
                          _Badge2.default,
                          {
                            badgeContent: _react2.default.createElement(
                              _Tooltip2.default,
                              {
                                title: column.tooltip,
                                placement: 'top',
                                interactive: true
                              },
                              _react2.default.createElement(_Help2.default, { className: classes.tooltipIcon })
                            )
                          },
                          column.label
                        ) : column.label
                      )
                    );
                  }),
                  verticalHeaders ? _react2.default.createElement(_TableCell2.default, { className: classes.tableCellFill }) : null
                ),
                filterRow
              ),
              _react2.default.createElement(
                _TableBody2.default,
                null,
                columnsFixed && dataFixed ? dataFixed.map(function (row, index) {
                  return _react2.default.createElement(
                    _TableRow2.default,
                    {
                      key: index,
                      className: (0, _classnames2.default)(classes.tableRow, classes.tableRowFixed)
                    },
                    columnsFixed.map(function (column) {
                      return _react2.default.createElement(
                        _TableCell2.default,
                        {
                          key: column.id,
                          className: (0, _classnames2.default)(classes.tableCell, _defineProperty({}, classes.tableCellVertical, column.verticalHeader))
                        },
                        column.renderCell ? column.renderCell(row) : row[column.id]
                      );
                    }),
                    verticalHeaders ? _react2.default.createElement(_TableCell2.default, { className: classes.tableCellFill }) : null
                  );
                }) : null,
                data.slice().sort(getComparator(columns, sortBy, order)).slice(page * pageSize, page * pageSize + pageSize).map(function (row, index) {
                  return _react2.default.createElement(
                    _TableRow2.default,
                    { key: index, className: classes.tableRow },
                    columns.map(function (column) {
                      return _react2.default.createElement(
                        _TableCell2.default,
                        {
                          key: column.id,
                          className: (0, _classnames2.default)(classes.tableCell, _defineProperty({}, classes.tableCellVertical, column.verticalHeader))
                        },
                        column.renderCell ? column.renderCell(row) : row[column.id]
                      );
                    }),
                    verticalHeaders ? _react2.default.createElement(_TableCell2.default, { className: classes.tableCellFill }) : null
                  );
                })
              )
            )
          ),
          !loading && data.length === 0 ? _react2.default.createElement(
            _PlotContainerSection2.default,
            null,
            _react2.default.createElement(
              'div',
              { align: 'center' },
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'subtitle1' },
                '(no data)'
              )
            )
          ) : null,
          _react2.default.createElement(_TablePagination2.default, {
            component: 'div',
            count: data.length,
            onChangePage: this.handleChangePage,
            page: page,
            rowsPerPage: pageSize,
            rowsPerPageOptions: [],
            ActionsComponent: TablePaginationActions
          })
        )
      );
    }
  }]);

  return OtTable;
}(_react.Component);

OtTable.defaultProps = {
  pageSize: PAGE_SIZE
};

exports.default = (0, _styles.withStyles)(tableStyles)(OtTable);