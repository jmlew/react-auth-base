import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

import { AccountsView } from './views';

export default function AccountRoutes({ match }: RouteComponentProps) {
  const { url } = match;
  return (
    <Switch>
      {/* TODO: Create feature sub-routes */}
      <Route exact={true} path={url} component={AccountsView} />
    </Switch>
  );
}
