import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MuiLink from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  base: {
    fontFamily: 'Inter',
    fontSize: 'inherit',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  },
  baseDefault: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  baseTooltip: {
    color: 'white',
    '&:hover': {
      color: theme.palette.primary.light,
    },
    textDecoration: 'underline',
  },
  baseFooter: {
    color: 'white',
    '&:hover': {
      color: theme.palette.primary.light,
    },
    display: 'flex',
    alignItems: 'center',
  },
  externalIcon: {
    fontSize: '70%',
    verticalAlign: 'baseline',
    marginLeft: '3px',
    width: 'auto',
    height: 'auto',
    display: 'inline',
  },
});

class Link extends Component {
  render() {
    const {
      classes,
      children,
      component,
      to,
      footer,
      tooltip,
      external,
    } = this.props;

    return (
      <MuiLink
        className={classNames(classes.base, {
          [classes.baseDefault]: !footer && !tooltip,
          [classes.baseFooter]: footer,
          [classes.basetooltip]: tooltip,
        })}
        component={component}
        to={to}
        underline="none"
        href={external ? to : null}
        target={external ? '_blank' : null}
        rel={external ? 'noopener noreferrer' : null}
      >
        {children}
        {footer ? null : external ? (
          <Icon
            className={classNames(
              'fa',
              'fa-external-link-alt',
              classes.externalIcon
            )}
          />
        ) : null}
      </MuiLink>
    );
  }
}

Link.propTypes = {
  /** Whether the link directs to an external site. */
  external: PropTypes.bool,
  /** Whether the link is used within the footer section. */
  footer: PropTypes.bool,
  /** Whether the link is used within a tooltip. */
  tooltip: PropTypes.bool,
  /** The handler to call on click. */
  onClick: PropTypes.func,
  /** The url to visit on clicking the link. */
  to: PropTypes.string.isRequired,
};

Link.defaultProps = {
  external: false,
  footer: false,
  tooltip: false,
  onClick: null,
  to: '/',
};

// export { Link };

export default withStyles(styles)(Link);
