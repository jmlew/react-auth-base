import React, { Suspense } from 'react';
import { Route, Switch, RouteComponentProps, Redirect } from 'react-router-dom';

import { Loading } from '../../shared/components';
import { userRouteConfig } from '../../shared/constants';
import RegisterView from './views/RegisterView';
import AccountView from './views/UserView';
import ForgotPwView from './views/ForgotPwView';

export default function UserRoutes({ match }: RouteComponentProps) {
  const { url } = match;
  const { register, account, forgotPw } = userRouteConfig;
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={`${url}${register.path}`} component={RegisterView} />
        <Route path={`${url}${account.path}`} component={AccountView} />
        <Route path={`${url}${forgotPw.path}`} component={ForgotPwView} />
        <Route exact={true} path={url}>
          <Redirect to={{ pathname: '/' }} />
        </Route>
      </Switch>
    </Suspense>
  );
}
