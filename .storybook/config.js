import { configure, addDecorator, addParameters } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { muiTheme } from 'storybook-addon-material-ui';
import CssBaseline from '@material-ui/core/CssBaseline';

import setupIcons from '../lib/icons/setupIcons';
import theme from '../lib/theme';
import { PALETTE } from '../lib/constants';
import otStorybookTheme from './theme';

// load icons
setupIcons();

// add changeable backgrounds (in our palette) and ot theming
addParameters({
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    ...Object.keys(PALETTE).map(name => ({ name, value: PALETTE[name] })),
  ],
  options: {
    theme: otStorybookTheme,
  },
});

// decorate all stories with the following
addDecorator(StoryRouter());
addDecorator(muiTheme(theme));

// automatically import all files ending in *.stories.js
const req = require.context('../lib/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
