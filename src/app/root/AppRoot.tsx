import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { muiTheme } from '../styles/theme/mui-theme';
import { iniAxiosInterceptors } from '../shared/interceptors';

import './styles.scss';
import AppShell from './AppShell';

function AppRoot() {
  const [errorMessage, setRequestMessage] = useState('');

  // Setup interceptors and state initialisation.
  iniAxiosInterceptors({
    onResponseError: (error: string) => setRequestMessage(error),
    onRequestError: (error: string) => setRequestMessage(error),
  });

  function handleHideError() {
    setRequestMessage('');
  }

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AppShell errorMessage={errorMessage} onHideError={handleHideError} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default AppRoot;
