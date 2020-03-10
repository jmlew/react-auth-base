import React, { useState, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Snackbar, Theme } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import AppHeader from '../layout/header/AppHeader';
import AppFooter from '../layout/footer/AppFooter';
import AppSidenav from '../layout/sidenav/AppSidenav';
import { authBasicHelper } from '../core/auth/helpers';
import { authRouteConfig } from '../shared/constants/routes';

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
  onHideError: () => void;
}
export default function AppShell({ errorMessage, onHideError }: AppShellProps) {
  const [isSidenavOpen, setSidenavOpen] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const isAuthenticated: boolean = authBasicHelper.isAuthenticated();

  function handleToggleSidenav(event: MouseEvent) {
    setSidenavOpen(!isSidenavOpen);
  }

  function handleSignout() {
    authBasicHelper.signout(() => {
      const signoutPath = `${authRouteConfig.signout.basePath}${authRouteConfig.signout.path}`;
      history.push(signoutPath);
    });
  }

  return (
    <div className={classes.root}>
      <AppHeader
        isAuthenticated={isAuthenticated}
        onSignout={handleSignout}
        onToggleSidenav={handleToggleSidenav}
      />
      <AppSidenav isOpen={isSidenavOpen} setOpen={setSidenavOpen} />
      <Container maxWidth="md" className={classes.content}>
        <AppRoutes />
      </Container>
      <footer className={classes.footer}>
        <AppFooter />
      </footer>
      <Snackbar open={errorMessage !== ''} autoHideDuration={4000} onClose={onHideError}>
        <MuiAlert onClose={onHideError} elevation={6} variant="filled" severity="error">
          {errorMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
