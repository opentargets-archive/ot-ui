import React from 'react';
import { findDOMNode } from 'react-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import downloadSVG from '../helpers/downloadSVG';

const styles = () => ({
  buttonMargin: {
    margin: '4px',
  },
  plotMargin: {
    marginBottom: '15px',
  },
});

const handleSVGDownload = (svgContainer, filenameStem) => {
  const svgNode = findDOMNode(svgContainer.current).querySelector('svg');
  downloadSVG({ svgNode, filenameStem });
};

const DownloadSVGPlot = ({ classes, svgContainer, filenameStem, children }) => (
  <Paper className={classes.plotMargin}>
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

export default withStyles(styles)(DownloadSVGPlot);
