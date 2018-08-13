import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    background: theme.palette.grey['200'],
    margin: 0,
    width: '100%',
    padding: 24,
  },
});

const Footer = ({ classes, version }) => (
  <Grid className={classes.footer} container justify={'center'} spacing={24}>
    <Grid item container xs={12} md={10} justify={'center'} spacing={16}>
      <Grid item xs={12} sm={3}>
        <Grid container direction={'column'}>
          <Grid item xs={12}>
            <Typography variant={'subheading'}>About</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Version</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>GitHub</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Privacy notice</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Terms of use</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Grid container direction={'column'}>
          <Grid item xs={12}>
            <Typography variant={'subheading'}>Open Targets Network</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Corporate Site</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Platform</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>LINK</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>DoRothEA</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Grid container direction={'column'}>
          <Grid item xs={12}>
            <Typography variant={'subheading'}>Partners</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Biogen</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>European Bioinformatics Institute</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>GSK</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Takeda</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Wellcome Sanger Institute</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Grid container direction={'column'}>
          <Grid item xs={12}>
            <Typography variant={'subheading'}>Help</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Documentation</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Contact</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subheading'}>Connect with us</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <Icon className={'fab fa-facebook'} />
              <Icon className={'fab fa-twitter-square'} />
              <Icon className={'fab fa-linkedin'} />
              <Icon className={'fab fa-youtube-square'} />
              <Icon className={'fab fa-medium'} />
              <Icon className={'fab fa-github-square'} />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Footer);
