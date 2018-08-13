import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  externallink: {
    fontSize: '0.8rem',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
});

const ExternalLink = ({ classes, href, children }) => (
  <a
    className={classes.externallink}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default withStyles(styles)(ExternalLink);
