import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  container: {
    marginBottom: '2px',
  },
  downloadHeader: {
    marginTop: '7px',
  },
});

function DataDownloader({ classes }) {
  return (
    <Grid
      container
      justify="flex-end"
      spacing={8}
      className={classes.container}
    >
      <Grid item>
        <Typography variant="caption" className={classes.downloadHeader}>
          Download table as
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="outlined">JSON</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined">CSV</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined">TSV</Button>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(DataDownloader);
