import React from 'react';
import MuiTabs from '@material-ui/core/Tabs';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => {
  return {
    root: {
      borderBottom: '1px solid black',
    },
    indicator: {
      display: 'none',
    },
  };
};
const Tabs = ({ classes, ...props }) => {
  return (
    <MuiTabs
      {...props}
      classes={{ root: classes.root, indicator: classes.indicator }}
    />
  );
};

export default withStyles(styles)(Tabs);
