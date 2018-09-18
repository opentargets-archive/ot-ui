import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import PlotContainerSection from './PlotContainerSection';

const styles = () => ({
  plotContainer: {
    marginBottom: '15px',
  },
});

const PlotContainer = ({ classes, left, center, right, children }) => (
  <Paper className={classes.plotContainer}>
    <PlotContainerSection>
      <Grid container justify="space-between">
        <Grid item>{left}</Grid>
        <Grid item>{center}</Grid>
        <Grid item>{right}</Grid>
      </Grid>
    </PlotContainerSection>
    {children}
  </Paper>
);

export default withStyles(styles)(PlotContainer);
