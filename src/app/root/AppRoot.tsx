import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { muiTheme } from '../styles/theme/mui-theme';
import { iniAxiosInterceptors } from '../core/api/interceptors';
import { AuthContext } from '../core/auth/context';
import { authBasicHelper } from '../core/auth/helpers';
import { ErrorMessageAlert } from '../shared/components/error';

import './styles.scss';
import AppShell from './AppShell';

function AppRoot() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  useEffect(updateAuth, []);

  // Setup interceptors and state initialisation.
  iniAxiosInterceptors({
    onResponseError: (error: string) => setErrorMessage(error),
    onRequestError: (error: string) => setErrorMessage(error),
  });

  function handleCloseError() {
    setErrorMessage('');
  }

  // Update global reference to authentication state.
  function updateAuth() {
    setIsAuth(authBasicHelper.isAuthenticated());
  }

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AuthContext.Provider value={{ isAuth, updateAuth }}>
          <AppShell />
          <ErrorMessageAlert errorMessage={errorMessage} onClose={handleCloseError} />
        </AuthContext.Provider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default AppRoot;
