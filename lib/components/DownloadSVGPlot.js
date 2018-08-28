import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  buttonMargin: {
    margin: '4px',
  },
});

const DownloadSVGPlot = ({ onSVGDownload, classes, children }) => {
  return (
    <Paper>
      <Grid container justify="flex-end">
        <Grid item className={classes.buttonMargin}>
          <Button variant="outlined" onClick={onSVGDownload}>
            SVG
          </Button>
        </Grid>
      </Grid>
      {children}
    </Paper>
  );
};

export default withStyles(styles)(DownloadSVGPlot);
