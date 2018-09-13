import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lighten, darken } from 'polished';

import setupIcons from '../icons/setupIcons';

const PRIMARY = '#0091eb';
const SECONDARY = '#ff6350';

// const GENE = '#dbb';
// const VARIANT = '#bdb';
// const STUDY = '#bbd';
const GENE = PRIMARY;
const VARIANT = PRIMARY;
const STUDY = PRIMARY;

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
    gene: GENE,
    tagVariant: lighten(0.05, VARIANT),
    indexVariant: darken(0.05, VARIANT),
    study: STUDY,
  },
});

class OtUiThemeProvider extends React.Component {
  componentDidMount() {
    setupIcons();
  }
  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    );
  }
}

export default OtUiThemeProvider;
