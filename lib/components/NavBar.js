import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import OpenTargetsTitle from './OpenTargetsTitle';

const styles = theme => ({
  navbar: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${
      theme.palette.primary.light
    } 90%)`,
    margin: 0,
    width: '100%',
  },
  flex: {
    flexGrow: 1,
  },
  menuExternalLinkContainer: {
    '&:first-of-type': {
      marginLeft: '1rem',
    },
    '&:not(:last-child)': {
      marginRight: '1rem',
    },
  },
  menuExternalLink: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
});

const MenuExternalLink = ({ classes, href, children }) => (
  <Typography color="inherit" className={classes.menuExternalLinkContainer}>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={classes.menuExternalLink}
    >
      {children}
    </a>
  </Typography>
);

const NavBar = ({ classes, name }) => (
  <AppBar className={classes.navbar} position="static" color="primary">
    <Toolbar variant="dense">
      <Button component={Link} to="/" color="inherit">
        <OpenTargetsTitle name={name} />
      </Button>
      <div className={classes.flex} />
      <MenuExternalLink
        classes={classes}
        href="https://docs.targetvalidation.org/"
      >
        Docs
      </MenuExternalLink>
      <MenuExternalLink
        classes={classes}
        href="mailto:support@targetvalidation.org"
      >
        Contact
      </MenuExternalLink>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(NavBar);
