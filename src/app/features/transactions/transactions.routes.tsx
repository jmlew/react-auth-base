import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

import { TransactionsView } from './views';

export default function TransactionRoutes({ match }: RouteComponentProps) {
  const { url } = match;
  return (
    <Switch>
      {/* TODO: Create feature sub-routes */}
      <Route exact={true} path={url} component={TransactionsView} />
    </Switch>
  );
}
