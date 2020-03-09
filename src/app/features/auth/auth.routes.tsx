import React from 'react';
import { Redirect, RouteComponentProps, Switch } from 'react-router-dom';

import { authRouteConfig } from '../../shared/constants/routes';
import { ErrorBoundaryRoute } from '../../shared/components';

import { SigninView, SignoutView } from './views';

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
