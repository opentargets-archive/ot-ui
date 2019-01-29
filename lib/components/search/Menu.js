import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit,
    position: 'absolute',
    width: '100%',
    zIndex: 1005,
  },
});

const Menu = ({ classes, innerProps, children, selectProps }) => {
  const { menuMessage } = selectProps;
  return (
    <Paper square className={classes.paper} {...innerProps}>
      {menuMessage ? menuMessage : null}
      {children}
    </Paper>
  );
};

export default withStyles(styles)(Menu);
