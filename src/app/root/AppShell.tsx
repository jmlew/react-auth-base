import React, { useState, MouseEvent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, makeStyles, Theme } from '@material-ui/core';

import AppHeader from '../layout/AppHeader/Header';
import AppFooter from '../layout/AppFooter/AppFooter';
import AppSidenav from '../layout/AppSidenav/AppSidenav';
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
  const [isSidenavOpen, setSidenavOpen] = useState(false);
  const classes = useStyles();
  const isAuthenticated = false;

  function toggleSidenav(event: MouseEvent) {
    setSidenavOpen(!isSidenavOpen);
  }

  return (
    <Router>
      <div className={classes.root}>
        <AppHeader isAuthenticated={isAuthenticated} toggleSidenav={toggleSidenav} />
        <AppSidenav isOpen={isSidenavOpen} setOpen={setSidenavOpen} />
        <Container maxWidth="md" className={classes.content}>
          <AppRoutes />
        </Container>
        <footer className={classes.footer}>
          <AppFooter />
        </footer>
      </div>
    </Router>
  );
}
