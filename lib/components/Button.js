import React from 'react';
import { default as MuiButton } from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
  gradient: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${
      theme.palette.primary.light
    } 90%)`,
    color: 'white',
    textDecoration: 'none',
  },
});

const Button = ({ classes, gradient, children, ...rest }) => (
  <MuiButton className={classNames({ [classes.gradient]: gradient })} {...rest}>
    {children}
  </MuiButton>
);

export default withStyles(styles)(Button);
