import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const MultiSelect = ({ value, options, handleChange }) => (
  <Select multiple value={value} onChange={handleChange}>
    {options.map(d => (
      <MenuItem key={d.value} value={d.value}>
        {d.label}
      </MenuItem>
    ))}
  </Select>
);

export default MultiSelect;
