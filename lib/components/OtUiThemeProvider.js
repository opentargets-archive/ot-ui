import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import defaultTheme from '../theme';
import setupIcons from '../icons/setupIcons';

class OtUiThemeProvider extends React.Component {
  componentDidMount() {
    setupIcons();
  }
  render() {
    const { children, theme = defaultTheme } = this.props;
    return (
      <ThemeProvider theme={createMuiTheme(theme)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    );
  }
}

export default OtUiThemeProvider;
