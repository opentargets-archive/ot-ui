import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  select: {
    minWidth: '300px',
  },
});

const MultiSelect = ({
  classes,
  value,
  options,
  handleChange,
  renderValue,
}) => (
  <Select
    className={classes.select}
    multiple
    autoWidth
    value={value}
    onChange={handleChange}
    renderValue={renderValue}
    displayEmpty
  >
    {options.map(d => (
      <MenuItem key={d.value} value={d.value}>
        {d.label}
      </MenuItem>
    ))}
  </Select>
);

export default withStyles(styles)(MultiSelect);
