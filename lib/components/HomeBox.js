import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

import OpenTargetsTitle from './OpenTargetsTitle';

const styles = theme => ({
  homeboxContainer: {
    overflow: 'visible',
  },
  homeboxHeader: {
    textAlign: 'center',
  },
});

const HomeBox = ({ classes, name, children }) => (
  <Grid item xs={12} md={8} lg={6}>
    <Card className={classes.homeboxContainer}>
      <CardHeader
        className={classes.homeboxHeader}
        title={<OpenTargetsTitle name={name} />}
      />
      <CardContent>{children}</CardContent>
    </Card>
  </Grid>
);

export default withStyles(styles)(HomeBox);
