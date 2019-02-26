import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lighten, darken } from 'polished';

import setupIcons from '../icons/setupIcons';

const PRIMARY = '#0091eb';
const SECONDARY = '#ff6350';

const GENE = PRIMARY;
const VARIANT = PRIMARY;
const STUDY = PRIMARY;

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
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
    text: {
      primary: '#5A5F5F',
    },
    gene: GENE,
    tagVariant: VARIANT,
    indexVariant: VARIANT,
    study: STUDY,
    high: darken(0.2, PRIMARY),
    medium: PRIMARY,
    low: lighten(0.2, PRIMARY),
    footer: '#2e2d35',
  },
  sectionPadding: '8px',
  widgetHeight: '250px',
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 3,
        border: 0,
        padding: '6px 12px',
        minWidth: '32px',
        minHeight: '32px',
        height: '32px',
        textTransform: 'none',
      },
    },
    MuiIconButton: {
      root: {
        width: '32px',
        height: '32px',
        padding: '0px',
      },
    },
    MuiTablePagination: {
      root: {
        height: '36px',
        minHeight: '36px',
      },
      toolbar: {
        height: '36px',
        minHeight: '36px',
      },
    },
    MuiTab: {
      root: {
        minWidth: '10px !important',
      },
      label: {
        textTransform: 'none',
      },
    },
    MuiTypography: {
      colorSecondary: {
        color: '#E2DFDF',
      },
      colorError: {
        color: '#C94C52',
      },
    },
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
