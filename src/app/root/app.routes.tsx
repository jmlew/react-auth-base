import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import { LoadingCircular, ErrorBoundaryRoute } from '../shared/components';
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
    <Suspense fallback={<LoadingCircular />}>
      <Switch>
        <ErrorBoundaryRoute path={appRouteConfig.auth.path} component={AuthFeature} />
        <ErrorBoundaryRoute path={appRouteConfig.user.path} component={UserFeature} />
        <ErrorBoundaryRoute
          path={appRouteConfig.accounts.path}
          component={AccountsFeature}
        />
        <ErrorBoundaryRoute
          path={appRouteConfig.transactions.path}
          component={TransactionsFeature}
        />
        <ErrorBoundaryRoute path={appRouteConfig.cards.path} component={CardsFeature} />
        <ErrorBoundaryRoute path="/" component={HomeView} />
      </Switch>
    </Suspense>
  );
}
