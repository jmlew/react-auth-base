import React, { Suspense } from 'react';
import { Switch, RouteComponentProps } from 'react-router-dom';

import { AccountsView } from './views';
import { LoadingCircular, ErrorBoundaryRoute } from '../../shared/components';

export default function AccountRoutes({ match }: RouteComponentProps) {
  const { url } = match;
  return (
    <Suspense fallback={<LoadingCircular />}>
      <Switch>
        {/* TODO: Create feature sub-routes */}
        <ErrorBoundaryRoute exact={true} path={url} component={AccountsView} />
      </Switch>
    </Suspense>
  );
}
