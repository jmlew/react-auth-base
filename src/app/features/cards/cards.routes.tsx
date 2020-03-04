import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

import { CardsView } from './views';

export default function CardRoutes({ match }: RouteComponentProps) {
  const { url } = match;
  return (
    <Switch>
      {/* TODO: Create feature sub-routes */}
      <Route exact={true} path={url} component={CardsView} />
    </Switch>
  );
}
