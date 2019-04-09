import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  base: {
    textDecoration: 'none',
  },
});

class Link extends React.Component {
  render() {
    const { classes = {}, children, to, external } = this.props;
    return external ? (
      <a
        className={classes.base}
        target="_blank"
        rel="noopener noreferrer"
        href={to}
      >
        {children}
      </a>
    ) : (
      <RouterLink className={classes.base} to={to}>
        {children}
      </RouterLink>
    );
  }
}

Link.propTypes = {
  /** Whether the link directs to an external site. */
  external: PropTypes.bool,
  /** The url to visit on clicking the link. */
  to: PropTypes.string,
};

Link.defaultProps = {
  external: false,
  to: '/',
};

export { Link };

export default withStyles(styles)(Link);
