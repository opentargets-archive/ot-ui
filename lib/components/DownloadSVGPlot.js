import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import downloadSVG from '../helpers/downloadSVG';

const styles = () => ({
  buttonMargin: {
    margin: '4px',
  },
});

const handleSVGDownload = (svgContainer, filenameStem) => {
  const svgNode = ReactDOM.findDOMNode(svgContainer.current).querySelector(
    'svg'
  );
  downloadSVG({ svgNode, filenameStem });
};

const DownloadSVGPlot = ({
  onSVGDownload,
  classes,
  svgContainer,
  filenameStem,
  children,
}) => {
  return (
    <Paper>
      <Grid container justify="flex-end">
        <Grid item className={classes.buttonMargin}>
          <Button
            variant="outlined"
            onClick={handleSVGDownload.bind(null, svgContainer, filenameStem)}
          >
            SVG
          </Button>
        </Grid>
      </Grid>
      {children}
    </Paper>
  );
};

export default withStyles(styles)(DownloadSVGPlot);
