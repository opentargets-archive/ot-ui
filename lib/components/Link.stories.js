import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Link, { Link as LinkComponent } from './Link.js';

storiesOf('Components|Link', module)
  .addDecorator(
    withInfo({
      header: false,
      inline: true,
      source: false,
      propTables: [LinkComponent],
      propTablesExclude: [Link],
    })
  )
  .add('Internal', () => <Link to="#">internal link</Link>)
  .add('External', () => (
    <Link to="#" external>
      external link
    </Link>
  ));
