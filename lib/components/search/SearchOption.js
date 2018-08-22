import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heading: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  subheading: {
    color: theme.palette.grey[800],
    fontSize: '0.75rem',
  },
  extra: {
    color: theme.palette.grey[600],
    fontSize: '0.65rem',
  },
});

const SearchOption = ({ classes, heading, subheading, extra }) => (
  <Grid container>
    <Grid item xs={12}>
      <Typography variant="body1">
        <span className={classes.heading}>{heading}</span>
        {'  '}
        <span className={classes.subheading}>{subheading}</span>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body1" className={classes.extra}>
        {extra}
      </Typography>
    </Grid>
  </Grid>
);

export default withStyles(styles)(SearchOption);
