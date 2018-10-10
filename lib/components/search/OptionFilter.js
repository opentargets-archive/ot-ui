import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';

const styles = theme => ({
  option: {
    fontSize: '0.8rem',
    padding: '0 5px',
    marginLeft: '2px',
    marginBottom: '2px',
    fontWeight: 400,
    borderLeft: `4px solid ${theme.palette.grey[500]}`,
  },
  optionChained: {
    borderLeft: `4px solid ${theme.palette.secondary.main}`,
    fontWeight: 500,
  },
  optionSelected: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    fontWeight: 500,
  },
});

// TODO: figure out why using this in Autocomplete fails

class Option extends React.Component {
  render() {
    const {
      classes,
      children,
      data,
      innerRef,
      innerProps,
      isFocused,
    } = this.props;
    return (
      <MenuItem
        className={classNames(classes.option, {
          [classes.optionChained]: data.chained,
          [classes.optionSelected]: data.selected,
        })}
        buttonRef={innerRef}
        selected={isFocused}
        component="div"
        {...innerProps}
      >
        {children}
      </MenuItem>
    );
  }
}

export default withStyles(styles)(Option);
