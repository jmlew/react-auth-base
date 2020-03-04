import React, { Suspense } from 'react';
import { Switch, RouteComponentProps, Redirect } from 'react-router-dom';

import { LoadingCircular, ErrorBoundaryRoute } from '../../shared/components';
import { userRouteConfig } from '../../shared/constants';
import * as fromViews from './views';

export default function UserRoutes({ match }: RouteComponentProps) {
  const { url } = match;
  const { register, account, forgotPw } = userRouteConfig;
  return (
    <Suspense fallback={<LoadingCircular />}>
      <Switch>
        <ErrorBoundaryRoute
          path={`${url}${register.path}`}
          component={fromViews.RegisterView}
        />
        <ErrorBoundaryRoute
          path={`${url}${account.path}`}
          component={fromViews.UserView}
        />
        <ErrorBoundaryRoute
          path={`${url}${forgotPw.path}`}
          component={fromViews.ForgotPwView}
        />
        <ErrorBoundaryRoute exact={true} path={url}>
          <Redirect to={{ pathname: '/' }} />
        </ErrorBoundaryRoute>
      </Switch>
    </Suspense>
  );
}
