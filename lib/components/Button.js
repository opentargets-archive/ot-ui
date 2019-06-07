import React from 'react';
import { default as MuiButton } from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
  gradient: {
    padding: '3px 6px',
    height: '24px',
    minHeight: '24px',
  },
});

const Button = ({ className, classes, gradient, children, ...rest }) => (
  <MuiButton
    className={classNames(className, { [classes.gradient]: gradient })}
    color="primary"
    variant="contained"
    elevation={0}
    {...rest}
  >
    {children}
  </MuiButton>
);

export default withStyles(styles)(Button);
