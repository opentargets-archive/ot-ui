import React from 'react';
import { default as MuiButton } from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${
      theme.palette.primary.light
    } 90%)`,
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '4px 8px',
    minHeight: '20px',
    textTransform: 'none',
  },
});

const Button = ({ classes, children, ...rest }) => (
  <MuiButton className={classes.root} {...{ rest }}>
    {children}
  </MuiButton>
);

export default withStyles(styles)(Button);
