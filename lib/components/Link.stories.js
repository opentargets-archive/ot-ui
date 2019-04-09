import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Link } from './Link.js';

storiesOf('Link', module)
  .add('internal', () => null)
  .add('external', () => <Link to="#">external link</Link>);
