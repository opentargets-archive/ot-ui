import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  noOptionsMessage: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
});

const NoOptionsMessage = ({ classes, innerProps, children }) => {
  return (
    <Typography
      color="textSecondary"
      className={classes.noOptionsMessage}
      {...innerProps}
    >
      {children}
    </Typography>
  );
};

export default withStyles(styles)(NoOptionsMessage);
