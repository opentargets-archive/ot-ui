import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  base: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  externalIcon: {
    fontSize: '0.7rem',
    verticalAlign: 'middle',
    marginLeft: '3px',
    width: '1rem',
    height: '1rem',
  },
});

class Link extends React.Component {
  render() {
    const { classes = {}, children, to, external } = this.props;
    return (
      <Typography>
        {external ? (
          <a
            className={classes.base}
            target="_blank"
            rel="noopener noreferrer"
            href={to}
          >
            {children}
            <Icon
              className={classNames(
                'fa',
                'fa-external-link-alt',
                classes.externalIcon
              )}
            />
          </a>
        ) : (
          <RouterLink className={classes.base} to={to}>
            {children}
          </RouterLink>
        )}
      </Typography>
    );
  }
}

Link.propTypes = {
  /** Whether the link directs to an external site. */
  external: PropTypes.bool,
  /** The url to visit on clicking the link. */
  to: PropTypes.string.isRequired,
};

Link.defaultProps = {
  external: false,
  to: '/',
};

export { Link };

export default withStyles(styles)(Link);
