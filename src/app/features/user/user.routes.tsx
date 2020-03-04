import React, { Suspense } from 'react';
import { Route, Switch, RouteComponentProps, Redirect } from 'react-router-dom';

import { Loading } from '../../shared/components';
import { userRouteConfig } from '../../shared/constants';
import * as fromViews from './views';

export default function UserRoutes({ match }: RouteComponentProps) {
  const { url } = match;
  const { register, account, forgotPw } = userRouteConfig;
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={`${url}${register.path}`} component={fromViews.RegisterView} />
        <Route path={`${url}${account.path}`} component={fromViews.UserView} />
        <Route path={`${url}${forgotPw.path}`} component={fromViews.ForgotPwView} />
        <Route exact={true} path={url}>
          <Redirect to={{ pathname: '/' }} />
        </Route>
      </Switch>
    </Suspense>
  );
}
