import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Snackbar, Theme } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import AppHeader from '../layout/header/AppHeader';
import AppFooter from '../layout/footer/AppFooter';
import AppSidenav from '../layout/sidenav/AppSidenav';
import { authBasicHelper } from '../core/auth/helpers';
import { authRouteConfig } from '../shared/constants/routes';
// import { usePrevious } from '../shared/helpers';
import { useAuth } from '../core/auth/context';

import AppRoutes from './app.routes';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    marginTop: 'auto',
  },
  content: {
    flexGrow: 1,
    paddingTop: 40,
    paddingBottom: 40,
  },
}));

interface AppShellProps {
  errorMessage: string;
}
export default function AppShell(props: AppShellProps) {
  const { errorMessage } = props;
  const [isSidenavOpen, openSidenav] = useState(false);
  const [isErrorShown, showError] = useState(errorMessage !== '');
  const { isAuth, updateAuth } = useAuth();
  // const prevProps: AppShellProps | undefined = usePrevious(props);
  useEffect(() => {
    if (errorMessage !== '') {
      showError(true);
    }
  }, [errorMessage]);

  const history = useHistory();
  const classes = useStyles();

  function handleToggleSidenav() {
    openSidenav(!isSidenavOpen);
  }

  function handleHideError() {
    showError(false);
  }

  function handleSignout() {
    authBasicHelper.signout().then(() => {
      const signoutPath = `${authRouteConfig.signout.basePath}${authRouteConfig.signout.path}`;
      history.push(signoutPath);
      updateAuth();
    });
  }
  return (
    <div className={classes.root}>
      <AppHeader
        isAuth={isAuth}
        onSignout={handleSignout}
        onToggleSidenav={handleToggleSidenav}
      />
      <AppSidenav isOpen={isSidenavOpen} setOpen={openSidenav} />
      <Container maxWidth="md" className={classes.content}>
        <AppRoutes />
      </Container>
      <footer className={classes.footer}>
        <AppFooter />
      </footer>
      <Snackbar open={isErrorShown} autoHideDuration={4000} onClose={handleHideError}>
        <MuiAlert
          onClose={handleHideError}
          elevation={6}
          variant="filled"
          severity="error"
        >
          {errorMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
