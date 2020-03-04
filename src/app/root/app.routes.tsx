import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from '../features/home/views/HomeView';
import { Loading } from '../shared/components';
import { appRouteConfig } from './app-route-config.constant';

const UserFeature = lazy(() => import('../features/user/user.routes'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={appRouteConfig.auth.path} component={UserFeature} />
        <Route path="/" component={HomeView} />
      </Switch>
    </Suspense>
  );
}
