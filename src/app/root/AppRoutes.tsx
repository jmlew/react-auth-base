import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from '../features/home/views/HomeView';

function AppRoutes() {
  return (
    <Switch>
      <Route path="/">
        <HomeView />
      </Route>
    </Switch>
  );
}

export default AppRoutes;
