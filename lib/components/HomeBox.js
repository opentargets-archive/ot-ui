import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import OpenTargetsTitle from './OpenTargetsTitle';
import OtIcon from '../icons/OtIcon';

const styles = theme => ({
  homeboxContainer: {
    overflow: 'visible',
    padding: '30px 60px',
  },
  homeboxHeader: {
    textAlign: 'center',
  },
  title: {
    color: theme.palette.grey[700],
    bottom: '40px',
    fontSize: '30px',
    marginLeft: '7px',
    position: 'relative',
  },
});

const HomeBox = ({ classes, name, children }) => (
  <Grid item xs={12} sm={8} md={8} lg={8}>
    <Paper className={classes.homeboxContainer}>
      <div className={classes.homeboxHeader}>
        <OtIcon />
        <OpenTargetsTitle className={classes.title} name={name} />
      </div>
      {children}
    </Paper>
  </Grid>
);

export default withStyles(styles)(HomeBox);
