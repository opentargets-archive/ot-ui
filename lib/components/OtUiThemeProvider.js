import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lighten, darken } from 'polished';

const PRIMARY = '#0091eb';
const SECONDARY = '#ff6350';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: lighten(0.2, PRIMARY),
      main: PRIMARY,
      dark: darken(0.2, PRIMARY),
      contrastText: '#fff',
    },
    secondary: {
      light: lighten(0.2, SECONDARY),
      main: SECONDARY,
      dark: darken(0.2, SECONDARY),
      contrastText: '#fff',
    },
  },
});

const OtUiThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default OtUiThemeProvider;
