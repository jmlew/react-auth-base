import React from 'react';
import { Route, Switch, RouteComponentProps, Redirect } from 'react-router-dom';

import { authRouteConfig } from '../../shared/constants';
import SigninView from './views/SigninView';
import SignoutView from './views/SignoutView';

export default function AuthRoutes({ match }: RouteComponentProps) {
  const { url } = match;
  const { signin, signout } = authRouteConfig;
  return (
    <Switch>
      <Route path={`${url}${signin.path}`} component={SigninView} />
      <Route path={`${url}${signout.path}`} component={SignoutView} />
      <Route exact={true} path={url}>
        <Redirect to={{ pathname: '/' }} />
      </Route>
    </Switch>
  );
}
