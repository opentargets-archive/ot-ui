import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

import ExternalLink from './ExternalLink';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.footer,
    color: '#fff',
    margin: 0,
    width: '100%',
    padding: 24,
  },
  social: {
    paddingTop: 24,
  },
});

const FooterLink = ({ label, url }) => (
  <Grid item xs={12}>
    <Typography color="inherit">
      <ExternalLink href={url}>{label}</ExternalLink>
    </Typography>
  </Grid>
);

const FooterSectionHeading = ({ children }) => (
  <Grid item xs={12}>
    <Typography variant="subtitle1" color="inherit">
      {children}
    </Typography>
  </Grid>
);

const FooterSocial = ({ social }) => (
  <Fragment>
    <FooterSectionHeading>Connect with us</FooterSectionHeading>
    <Typography color="inherit">
      {social.map(({ classes, url }, i) => (
        <ExternalLink href={url} key={i}>
          <Icon className={classes} />
        </ExternalLink>
      ))}
    </Typography>
  </Fragment>
);

const FooterSection = ({ heading, links, social }) => (
  <Grid
    item
    xs={12}
    sm={3}
    container
    direction={'column'}
    justify="space-between"
  >
    <Grid item>
      <FooterSectionHeading>{heading}</FooterSectionHeading>
      {links.map((link, i) => (
        <FooterLink key={i} label={link.label} url={link.url} />
      ))}
    </Grid>

    {social ? (
      <Grid item>
        <FooterSocial social={social} />
      </Grid>
    ) : null}
  </Grid>
);

const Footer = props => {
  console.log('props', props);
  const { classes, externalLinks } = props;
  return (
    <Grid className={classes.footer} container justify={'center'} spacing={24}>
      <Grid item container xs={12} md={10} spacing={16}>
        <FooterSection heading="About" links={externalLinks.about} />
        <FooterSection
          heading="Help"
          links={externalLinks.help}
          social={externalLinks.social}
        />
        <FooterSection heading="Partners" links={externalLinks.partners} />
        <FooterSection heading="Open Targets" links={externalLinks.network} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Footer);
