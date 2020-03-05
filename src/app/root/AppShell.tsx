import React, { useState, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, makeStyles, Theme } from '@material-ui/core';

import AppHeader from '../layout/header/AppHeader';
import AppFooter from '../layout/footer/AppFooter';
import AppSidenav from '../layout/sidenav/AppSidenav';
import AppRoutes from './app.routes';
import { authBasicHelper } from '../core/helpers';
import { authRouteConfig } from '../shared/constants';

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
  const [isSidenavOpen, setSidenavOpen] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const isAuthenticated = authBasicHelper.isAuthenticated;

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
    </div>
  );
}
