import React from 'react';
import MuiTab from '@material-ui/core/Tab';
import withStyles from '@material-ui/core/styles/withStyles';
import { PALETTE } from './../constants';

const styles = () => {
  return {
    selected: { backgroundColor: PALETTE.purple, color: 'white' },
  };
};

const Tab = ({ classes, ...props }) => {
  return (
    <MuiTab {...props} disableRipple classes={{ selected: classes.selected }} />
  );
};

export default withStyles(styles)(Tab);
