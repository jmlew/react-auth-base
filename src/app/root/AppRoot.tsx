import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import './styles.scss';
import { muiTheme } from '../styles/theme/mui-theme';
import AppShell from './AppShell';

function AppRoot() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline>
        <AppShell />
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default AppRoot;
