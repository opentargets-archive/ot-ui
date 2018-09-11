import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import HelpIcon from '@material-ui/icons/Help';
import downloadTable from '../helpers/downloadTable';

const PAGE_SIZE = 10;

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
  },
});

class TablePaginationActions extends Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    const { onChangePage, page } = this.props;
    onChangePage(event, page - 1);
  };

  handleNextButtonClick = event => {
    const { onChangePage, page } = this.props;
    onChangePage(event, page + 1);
  };

  handleLastPageButtonClick = event => {
    const { onChangePage, count, rowsPerPage } = this.props;
    const lastPage = Math.ceil(count / rowsPerPage) - 1;
    onChangePage(event, lastPage);
  };

  render() {
    const { count, page, rowsPerPage, classes } = this.props;
    const lastPage = Math.ceil(count / rowsPerPage) - 1;
    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          <FirstPageIcon />
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= lastPage}
          aria-label="Next Page"
        >
          <KeyboardArrowRight />
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= lastPage}
          aria-label="Last Page"
        >
          <LastPageIcon />
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions = withStyles(actionsStyles)(TablePaginationActions);

const getComparator = (sortBy, order) => {
  const comparatorValue = order === 'desc' ? 1 : -1;

  return (a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return comparatorValue;
    }

    if (a[sortBy] > b[sortBy]) {
      return -comparatorValue;
    }

    return 0;
  };
};

const tableStyles = theme => ({
  tableWrapper: {
    overflowX: 'auto',
  },
  tooltipIcon: {
    fontSize: '1.2rem',
    paddingLeft: `0.6rem`,
  },
  buttonMargin: {
    marginRight: '4px',
  },
  tableCell: {
    paddingRight: '24px',
    paddingLeft: 0,
    minWidth: '190px',
    '&:first-child': {
      paddingLeft: '24px',
    },
  },
});

class OtTable extends Component {
  state = {
    page: 0,
    sortBy: this.props.sortBy,
    order: this.props.order,
  };

  handleChangePage = (event, page) => {
    this.setState({
      page,
    });
  };

  selectSortColumn = sortBy => {
    let order = 'desc';

    if (this.state.sortBy === sortBy && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ sortBy, order });
  };

  handleTableDownload = format => {
    const {
      columns,
      data,
      downloadFileStem,
      excludeDownloadColumns,
    } = this.props;

    const headerMap = excludeDownloadColumns
      ? columns.filter(column => !excludeDownloadColumns.includes(column.id))
      : columns;

    downloadTable({
      headerMap,
      rows: data,
      format,
      filenameStem: downloadFileStem,
    });
  };

  render() {
    const { columns, data, classes } = this.props;
    const { sortBy, order } = this.state;
    const { page } = this.state;

    return (
      <Paper>
        <Grid container justify="flex-end" spacing={8}>
          <Grid item>
            <Button
              variant="outlined"
              onClick={this.handleTableDownload.bind(null, 'json')}
            >
              JSON
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              onClick={this.handleTableDownload.bind(null, 'csv')}
            >
              CSV
            </Button>
          </Grid>
          <Grid item className={classes.buttonMargin}>
            <Button
              variant="outlined"
              onClick={this.handleTableDownload.bind(null, 'tsv')}
            >
              TSV
            </Button>
          </Grid>
        </Grid>
        <div className={classes.tableWrapper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.id} className={classes.tableCell}>
                    <TableSortLabel
                      active={column.id === sortBy}
                      direction={order}
                      onClick={this.selectSortColumn.bind(null, column.id)}
                    >
                      {column.tooltip ? (
                        <Badge
                          badgeContent={
                            <Tooltip title={column.tooltip} placement="top">
                              <HelpIcon className={classes.tooltipIcon} />
                            </Tooltip>
                          }
                        >
                          {column.label}
                        </Badge>
                      ) : (
                        column.label
                      )}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice()
                .sort(getComparator(sortBy, order))
                .slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)
                .map((row, index) => (
                  <TableRow key={index}>
                    {columns.map(column => (
                      <TableCell key={column.id} className={classes.tableCell}>
                        {column.renderCell
                          ? column.renderCell(row)
                          : row[column.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          onChangePage={this.handleChangePage}
          page={page}
          rowsPerPage={PAGE_SIZE}
          rowsPerPageOptions={[]}
          ActionsComponent={TablePaginationActions}
        />
      </Paper>
    );
  }
}

export default withStyles(tableStyles)(OtTable);
