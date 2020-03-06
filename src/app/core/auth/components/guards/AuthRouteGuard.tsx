import React from 'react';
import { RouteComponentProps, Redirect, Route, RouteProps } from 'react-router-dom';

import { AuthState } from '../../models/auth.model';
import { withinErrorBoundary } from '../../../../shared/components';

/**
 * Route guard to redirect routes to a given path when the given authenticated flag is
 * false.
 */
export interface AuthGuardRouteProps extends AuthState, RouteProps {
  redirectPath: string;
}

export function AuthRouteGuard({
  isAuthenticated,
  redirectPath,
  component: Component,
  ...rest
}: AuthGuardRouteProps | any) {
  function authGuardRenderer(props: RouteComponentProps<any>) {
    const { location } = props;
    return isAuthenticated ? (
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
