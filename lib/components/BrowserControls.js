import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const BrowserControls = ({
  handlePanLeft,
  handlePanRight,
  handleZoomIn,
  handleZoomOut,
  displayTypeValue,
  displayTypeOptions,
  handleDisplayTypeChange,
}) => (
  <Grid container alignItems="center">
    <Grid item>
      <IconButton onClick={handlePanLeft}>
        <KeyboardArrowLeft />
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton onClick={handlePanRight}>
        <KeyboardArrowRight />
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton onClick={handleZoomIn}>
        <Add />
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton onClick={handleZoomOut}>
        <Remove />
      </IconButton>
    </Grid>
    <Grid item>
      <Select value={displayTypeValue} onChange={handleDisplayTypeChange}>
        {displayTypeOptions.map(d => (
          <MenuItem key={d.value} value={d.value}>
            {d.label}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  </Grid>
);

export default BrowserControls;
