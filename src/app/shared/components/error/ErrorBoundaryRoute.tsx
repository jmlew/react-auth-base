import React from 'react';
import { RouteProps, RouteComponentProps, Route } from 'react-router-dom';

import { ErrorBoundary } from './ErrorBoundary';

// TODO: resolve issue with adding union any type.
export function ErrorBoundaryRoute({ component: Component, ...rest }: RouteProps | any) {
  function withinErrorBoundary(props: RouteComponentProps<any>) {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  }

  if (!Component) {
    throw new Error(`A component needs to be specified for path ${(rest as any).path}`);
  }

  return <Route {...rest} render={withinErrorBoundary} />;
}
