import React, { ComponentType } from 'react';
import { RouteProps, RouteComponentProps, Route } from 'react-router-dom';

import { ErrorBoundary } from './ErrorBoundary';

// TODO: resolve issue with adding union any type.
export function ErrorBoundaryRoute({ component: Component, ...rest }: RouteProps | any) {
  if (!Component) {
    throw new Error(`A component needs to be specified for path ${(rest as any).path}`);
  }

  function render(props: RouteComponentProps<any>) {
    return withinErrorBoundary(Component, props);
  }

  return <Route {...rest} render={render} />;
}

export function withinErrorBoundary(
  Component: ComponentType<any>,
  props: RouteComponentProps<any>
) {
  return (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
}
