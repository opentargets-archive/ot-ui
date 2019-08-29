import React from 'react';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import OpenTargetsTitle from './OpenTargetsTitle';

const styles = theme => ({
  navbar: {
    backgroundColor: theme.palette.primary.main,
    margin: 0,
    width: '100%',
  },
  navbarHomepage: {
    left: 0,
    top: 0,
    position: 'absolute',
    background: 'none',
    boxShadow: 'none',
  },
  flex: {
    flexGrow: 1,
  },
  menuExternalLinkContainer: {
    fontSize: '1rem',
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

const NavBar = ({
  classes,
  name,
  search,
  api,
  downloads,
  docs,
  contact,
  homepage,
  linkComponent,
}) => (
  <AppBar
    className={classNames(classes.navbar, {
      [classes.navbarHomepage]: homepage,
    })}
    position="static"
    color="primary"
    elevation={0}
  >
    <Toolbar variant="dense">
      {homepage ? null : (
        <Link component={linkComponent} to="/">
          <OpenTargetsTitle name={name} />
        </Link>
      )}
      <div className={classes.flex} />
      {search ? search : null}
      <MenuExternalLink classes={classes} href={docs}>
        Docs
      </MenuExternalLink>
      <MenuExternalLink classes={classes} href={api}>
        API
      </MenuExternalLink>
      <MenuExternalLink classes={classes} href={downloads}>
        Downloads
      </MenuExternalLink>
      <MenuExternalLink classes={classes} href={contact}>
        Contact
      </MenuExternalLink>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(NavBar);
