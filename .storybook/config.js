import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { muiTheme } from 'storybook-addon-material-ui';

import { theme } from '../lib/theme';

// decorate all stories with the following
addDecorator(StoryRouter());
addDecorator(muiTheme(theme));

// automatically import all files ending in *.stories.js
const req = require.context('../lib/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
