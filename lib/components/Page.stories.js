import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Page, { Page as PageComponent } from './Page';
import NavBar from './NavBar';
import Footer from './Footer';

const externalLinks = {
  about: [
    {
      label: 'Version 2222ccc',
      url: 'https://github.com/opentargets/platform-app',
    },
    {
      label: 'Terms of use',
      url: 'http://www.targetvalidation.org/terms-of-use',
    },
    {
      label: 'Privacy notice',
      url: 'https://www.ebi.ac.uk/data-protection/privacy-notice/open-targets',
    },
  ],
  network: [
    {
      label: 'Overview',
      url: 'https://www.opentargets.org',
    },
    { label: 'Science', url: 'https://www.opentargets.org/science' },
    { label: 'Resources', url: 'https://www.opentargets.org/resources' },
    { label: 'Jobs', url: 'https://www.opentargets.org/jobs' },
    { label: 'Blog', url: 'https://blog.opentargets.org' },
  ],
  partners: [
    { label: 'Biogen', url: 'https://www.biogen.com' },
    { label: 'Celgene', url: 'https://www.celgene.com' },
    {
      label: 'EMBL-EBI',
      url: 'https://www.ebi.ac.uk',
    },
    { label: 'GSK', url: 'https://www.gsk.com' },
    { label: 'Sanofi', url: 'https://www.sanofi.com' },
    { label: 'Takeda', url: 'https://www.takeda.com' },
    {
      label: 'Wellcome Sanger Institute',
      url: 'https://www.sanger.ac.uk',
    },
  ],
  help: [
    {
      label: 'Documentation',
      iconClasses: 'fa fa-question-circle',
      url: 'https://docs.targetvalidation.org',
    },
    {
      label: 'support@targetvalidation.org',
      iconClasses: 'fa fa-envelope',
      url: 'mailto:support@targetvalidation.org',
    },
  ],
  social: [
    {
      iconClasses: 'fab fa-facebook',
      url: 'https://www.facebook.com/OpenTargets',
    },
    {
      iconClasses: 'fab fa-twitter-square',
      url: 'http://twitter.com/targetvalidate',
    },
    {
      iconClasses: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/company/open-targets',
    },
    {
      iconClasses: 'fab fa-youtube-square',
      url: 'https://www.youtube.com/channel/UCLMrondxbT0DIGx5nGOSYOQ',
    },
    { iconClasses: 'fab fa-medium', url: 'https://medium.com/opentargets' },
    {
      iconClasses: 'fab fa-github-square',
      url: 'https://github.com/opentargets',
    },
  ],
};

storiesOf('Components|Page', module)
  .addDecorator(
    withInfo({
      header: false,
      inline: true,
      source: false,
      propTables: [PageComponent],
      propTablesExclude: [Page],
    })
  )
  .add('No header or footer', () => <Page>Content</Page>)
  .add('With header and footer', () => (
    <Page
      header={<NavBar name="<application-name>" />}
      footer={<Footer externalLinks={externalLinks} />}
    >
      Content
    </Page>
  ));
