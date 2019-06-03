import React from 'react';
import { default as MuiButton } from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
  gradient: {
    // background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${
    //   theme.palette.primary.light
    // } 90%)`,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: '3px 6px',
    height: '24px',
    minHeight: '24px',
  },
});

const Button = ({ className, classes, gradient, children, ...rest }) => (
  <MuiButton
    className={classNames(className, { [classes.gradient]: gradient })}
    {...rest}
  >
    {children}
  </MuiButton>
);

export default withStyles(styles)(Button);
