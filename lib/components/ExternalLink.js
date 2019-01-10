import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

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

const ExternalLink = ({ classes, href, children, className }) => (
  <a
    className={classNames(classes.externallink, className)}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default withStyles(styles)(ExternalLink);
