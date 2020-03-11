import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { muiTheme } from '../styles/theme/mui-theme';
import { iniAxiosInterceptors } from '../core/api/interceptors';
import { AuthContext } from '../core/auth/context';
import { authBasicHelper } from '../core/auth/helpers';
import { AlertContext } from '../core/alerts/context';
import { AlertMessage } from '../core/alerts/components';
import { AlertType } from '../core/alerts/enums/alert.enum';
import { AlertConfig } from '../core/alerts/models/alert.model';

import './styles.scss';
import AppShell from './AppShell';

function AppRoot() {
  const [alert, setAlert] = useState();
  const [isAlertShown, showAlert] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    // Init auth state.
    updateAuth();
    // Setup interceptors and state initialisation.
    iniAxiosInterceptors({
      onResponseError: (message: string) =>
        updateAlert({ type: AlertType.Error, message }),
      onRequestError: (message: string) =>
        updateAlert({ type: AlertType.Error, message }),
    });
  }, []);

  // Update global reference to authentication state.
  function updateAuth() {
    setIsAuth(authBasicHelper.isAuthenticated());
  }

  function updateAlert(config: AlertConfig) {
    setAlert(config);
    showAlert(true);
  }

  function handleCloseAlert() {
    showAlert(false);
  }

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AuthContext.Provider value={{ isAuth, updateAuth }}>
          <AlertContext.Provider value={{ alert, setAlert: updateAlert }}>
            <AppShell />
            {alert != null && (
              <AlertMessage isShown={isAlertShown} onClose={handleCloseAlert} />
            )}
          </AlertContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default AppRoot;
