import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const SubHeading = ({ left, right }) => (
  <Grid container justify="space-between">
    <Grid item>
      <Typography variant="subtitle1">{left}</Typography>
    </Grid>
    <Grid item>
      <Typography variant="subtitle1">{right}</Typography>
    </Grid>
  </Grid>
);

export default SubHeading;
