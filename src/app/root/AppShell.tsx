import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, makeStyles, Theme } from '@material-ui/core';

import AppHeader from '../layout/AppHeader/Header';
import AppRoutes from './AppRoutes';

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    paddingTop: 20,
    paddingBottom: 20,
  },
}));

function AppShell() {
  const classes = useStyles();
  return (
    <Router>
      <AppHeader />
      <Container maxWidth="md">
        <div className={classes.content}>
          <AppRoutes />
        </div>
      </Container>
    </Router>
  );
}

export default AppShell;
