import React, { ComponentType } from 'react';
import { RouteProps, RouteComponentProps, Redirect, Route } from 'react-router-dom';

import { AuthState, AuthService } from '../../models/auth.model';
import { ErrorBoundary } from '../../../shared/components';
import { authRouteConfig } from '../../../shared/constants';
import { authHelper } from '../../helpers';

interface AuthGuardRouteProps extends AuthState, RouteProps {}

function AuthGuardRouteRedirector({
  isAuthenticated,
  component: Component,
  ...rest
}: AuthGuardRouteProps | any) {
  function withinErrorBoundary(props: RouteComponentProps<any>) {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  }

  function authGuardRenderer(props: RouteComponentProps<any>) {
    const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;
    return isAuthenticated ? (
      withinErrorBoundary(props)
    ) : (
      <Redirect
        to={{
          pathname: signinPath,
          state: { from: props.location },
        }}
      />
    );
  }

  return <Route {...rest} render={authGuardRenderer} />;
}

function withAuthService(WrappedComponent: ComponentType<RouteProps>, auth: AuthService) {
  return (props: any) => (
    <WrappedComponent isAuthenticated={auth.isAuthenticated} {...props} />
  );
}

export const AuthGuardRoute = withAuthService(AuthGuardRouteRedirector, authHelper);
