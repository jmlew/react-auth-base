import React, { Suspense } from 'react';
import { RouteComponentProps, Switch } from 'react-router-dom';

import { ErrorBoundaryRoute, LoadingCircular } from '../../shared/components';

import { TransactionsView } from './views';

export default function TransactionRoutes({ match }: RouteComponentProps) {
  const { url } = match;
  return (
    <Suspense fallback={<LoadingCircular />}>
      <Switch>
        {/* TODO: Create feature sub-routes */}
        <ErrorBoundaryRoute exact={true} path={url} component={TransactionsView} />
      </Switch>
    </Suspense>
  );
}
