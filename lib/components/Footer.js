import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

import ExternalLink from './ExternalLink';

const externalLinks = ({ version, commitHash, githubUrl }) => ({
  about: [
    {
      label: `Version ${version} (${commitHash})`,
      url: `${githubUrl}/commit/${commitHash}`,
    },
    { label: 'Github codebase', url: githubUrl },
    {
      label: 'Privacy notice',
      url: 'https://www.ebi.ac.uk/data-protection/privacy-notice/open-targets',
    },
    {
      label: 'Terms of use',
      url: 'http://www.targetvalidation.org/terms-of-use',
    },
  ],
  network: [
    {
      label: 'Overview',
      url: 'https://www.opentargets.org',
    },
    { label: 'Science', url: 'https://www.opentargets.org/science' },
    { label: 'Resources', url: 'https://www.opentargets.org/resources' },
    { label: 'Blog', url: 'https://blog.opentargets.org' },
  ],
  partners: [
    { label: 'Biogen', url: 'https://www.biogen.com' },
    { label: 'Celgene', url: 'http://www.celgene.com' },
    { label: 'EMBL-EBI', url: 'http://www.ebi.ac.uk' },
    { label: 'GSK', url: 'http://www.gsk.com' },
    { label: 'Takeda', url: 'https://www.takeda.com' },
    {
      label: 'Wellcome Sanger Institute',
      url: 'http://www.sanger.ac.uk',
    },
  ],
  help: [
    {
      label: 'Documentation',
      url: 'https://opentargets.gitbook.io/open-targets-genetics-documentation',
    },
    {
      label: (
        <span>
          <Icon className="fab fa-facebook" />
          geneticsportal@opentargets.org
        </span>
      ),
      url: 'mailto:support@targetvalidation.org',
    },
  ],
  social: [
    {
      classes: 'fab fa-facebook',
      url: 'https://www.facebook.com/OpenTargets',
    },
    {
      classes: 'fab fa-twitter-square',
      url: 'http://twitter.com/targetvalidate',
    },
    {
      classes: 'fab fa-linkedin',
      url:
        'https://www.linkedin.com/company/centre-for-therapeutic-target-validation',
    },
    {
      classes: 'fab fa-youtube-square',
      url: 'https://www.youtube.com/channel/UCLMrondxbT0DIGx5nGOSYOQ',
    },
    { classes: 'fab fa-medium', url: 'https://medium.com/opentargets' },
    {
      classes: 'fab fa-github-square',
      url: 'https://github.com/opentargets',
    },
  ],
});

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.footer,
    color: '#fff',
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
    <Typography variant={'subheading'} color="inherit">
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

const Footer = ({ classes, version, commitHash, githubUrl }) => {
  const external = externalLinks({ version, commitHash, githubUrl });
  return (
    <Grid className={classes.footer} container justify={'center'} spacing={24}>
      <Grid item container xs={12} md={10} spacing={16}>
        <FooterSection heading="About" links={external.about} />
        <FooterSection
          heading="Help"
          links={external.help}
          social={external.social}
        />
        <FooterSection heading="Partners" links={external.partners} />
        <FooterSection heading="Open Targets" links={external.network} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Footer);
