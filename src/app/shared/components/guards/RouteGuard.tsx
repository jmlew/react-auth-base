import React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';

import { withinErrorBoundary } from '../error/ErrorBoundaryRoute';

/**
 * Route guard to redirect routes to a given path when the given canActivate flag is
 * false.
 */
export interface RouteGuardProps extends RouteProps {
  canActivate: boolean;
  redirectPath: string;
}

export function RouteGuard({
  canActivate,
  redirectPath,
  component: Component,
  ...rest
}: RouteGuardProps | any) {
  function authGuardRenderer(props: RouteComponentProps<any>) {
    const { location } = props;
    return canActivate ? (
      withinErrorBoundary(Component, props)
    ) : (
      <Redirect
        to={{
          pathname: redirectPath,
          state: { from: location },
        }}
      />
    );
  }

  return <Route {...rest} render={authGuardRenderer} />;
}
