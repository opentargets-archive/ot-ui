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
});

const linkStyles = () => {
  return {
    iconClass: {
      marginRight: '10px',
    },
    linkContainer: {
      marginBottom: '8px',
    },
    footerLink: {
      display: 'flex',
      alignItems: 'center',
    },
  };
};

let FooterLink = ({ label, url, classes, iconClasses }) => {
  return (
    <Grid item xs={12} className={classes.linkContainer}>
      <Typography color="inherit">
        <ExternalLink href={url} className={classes.footerLink}>
          {iconClasses && (
            <Icon className={iconClasses + ' ' + classes.iconClass} />
          )}
          {label}
        </ExternalLink>
      </Typography>
    </Grid>
  );
};

FooterLink = withStyles(linkStyles)(FooterLink);

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
      {social.map(({ iconClasses, url }, i) => (
        <ExternalLink href={url} key={i}>
          <Icon className={iconClasses} />
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
    direction="column"
    justify="space-between"
  >
    <Grid item>
      <FooterSectionHeading>{heading}</FooterSectionHeading>
      {links.map((link, i) => (
        <FooterLink
          key={i}
          label={link.label}
          url={link.url}
          iconClasses={link.iconClasses}
        />
      ))}
    </Grid>

    {social ? (
      <Grid item>
        <FooterSocial social={social} />
      </Grid>
    ) : null}
  </Grid>
);

const Footer = ({ classes, externalLinks }) => {
  return (
    <Grid className={classes.footer} container justify={'center'} spacing={24}>
      <Grid item container xs={12} md={10} spacing={16}>
        <FooterSection heading="About" links={externalLinks.about} />
        <FooterSection
          heading="Help"
          links={externalLinks.help}
          social={externalLinks.social}
        />
        <FooterSection heading="Open Targets" links={externalLinks.network} />
        <FooterSection heading="Partners" links={externalLinks.partners} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Footer);
