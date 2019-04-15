import React from 'react';

import { storiesOf } from '@storybook/react';

import Link from './Link.js';

storiesOf('Components|Link', module)
  .add('Internal', () => <Link to="#">internal link</Link>)
  .add('External', () => (
    <Link to="#" external>
      external link
    </Link>
  ));
