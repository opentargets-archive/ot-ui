import { create } from '@storybook/theming';

import theme from '../lib/theme';

// import logoImage from './logo.svg';

export default create({
  base: 'light',

  colorPrimary: theme.palette.primary.main,
  colorSecondary: theme.palette.secondary.main,

  // UI
  appBg: theme.palette.grey[100],
  appContentBg: 'white',
  appBorderColor: theme.palette.primary.main,
  appBorderRadius: 0,

  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: theme.palette.primary.light,

  // // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'Open Targets UI',
  brandUrl: 'https://opentargets.org',
  brandImage: '/logo.svg',
});
