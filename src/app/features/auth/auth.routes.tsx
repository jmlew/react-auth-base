import React from 'react';
import { Switch, RouteComponentProps, Redirect } from 'react-router-dom';

import { authRouteConfig } from '../../shared/constants';
import { SigninView, SignoutView } from './views';
import { ErrorBoundaryRoute } from '../../shared/components';

export default function AuthRoutes({ match }: RouteComponentProps) {
  const { url } = match;
  const { signin, signout } = authRouteConfig;
  return (
    <Switch>
      <ErrorBoundaryRoute path={`${url}${signin.path}`} component={SigninView} />
      <ErrorBoundaryRoute path={`${url}${signout.path}`} component={SignoutView} />
      <ErrorBoundaryRoute exact={true} path={url}>
        <Redirect to={{ pathname: '/' }} />
      </ErrorBoundaryRoute>
    </Switch>
  );
}
