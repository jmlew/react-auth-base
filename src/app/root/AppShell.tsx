import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, makeStyles, Theme } from '@material-ui/core';

import AppHeader from '../layout/AppHeader/Header';
import AppRoutes from './app.routes';

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    paddingTop: 40,
    paddingBottom: 40,
  },
}));

export default function AppShell() {
  const classes = useStyles();
  const isAuthenticated = true;
  return (
    <Router>
      <AppHeader isAuthenticated={isAuthenticated} />
      <Container maxWidth="md">
        <div className={classes.content}>
          <AppRoutes />
        </div>
      </Container>
    </Router>
  );
}
