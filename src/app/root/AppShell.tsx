import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Container, Theme } from '@material-ui/core';

import AppHeader from '../layout/header/AppHeader';
import AppFooter from '../layout/footer/AppFooter';
import AppSidenav from '../layout/sidenav/AppSidenav';
import { authBasicHelper } from '../core/auth/helpers';
import { authRouteConfig } from '../shared/constants/routes';
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

export default function AppShell() {
  const [isSidenavOpen, openSidenav] = useState(false);
  const { isAuth, updateAuth } = useAuth();
  const history = useHistory();
  const classes = useStyles();

  function handleToggleSidenav() {
    openSidenav(!isSidenavOpen);
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
    </div>
  );
}
