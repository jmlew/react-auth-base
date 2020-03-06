import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { muiTheme } from '../styles/theme/mui-theme';

import './styles.scss';
import AppShell from './AppShell';

function AppRoot() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default AppRoot;
