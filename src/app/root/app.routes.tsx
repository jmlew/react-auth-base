import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Loading } from '../shared/components';
import { appRouteConfig } from '../shared/constants';

// Non lazy-loaded features.
import HomeView from '../features/home/views/HomeView';
import AuthFeature from '../features/auth/auth.routes';

// Lazy-loaded features.
const UserFeature = lazy(() => import('../features/user/user.routes'));
const AccountsFeature = lazy(() => import('../features/accounts/accounts.routes'));
const TransactionsFeature = lazy(() =>
  import('../features/transactions/transactions.routes')
);
const CardsFeature = lazy(() => import('../features/cards/cards.routes'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={appRouteConfig.auth.path} component={AuthFeature} />
        <Route path={appRouteConfig.user.path} component={UserFeature} />
        <Route path={appRouteConfig.accounts.path} component={AccountsFeature} />
        <Route path={appRouteConfig.transactions.path} component={TransactionsFeature} />
        <Route path={appRouteConfig.cards.path} component={CardsFeature} />
        <Route path="/" component={HomeView} />
      </Switch>
    </Suspense>
  );
}
