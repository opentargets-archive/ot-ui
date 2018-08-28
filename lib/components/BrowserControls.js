import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

class BrowserControls extends React.Component {
  render() {
    const {
      handlePanLeft,
      handlePanRight,
      handleZoomIn,
      handleZoomOut,
    } = this.props;
    return (
      <Grid container>
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
      </Grid>
    );
  }
}

export default BrowserControls;
