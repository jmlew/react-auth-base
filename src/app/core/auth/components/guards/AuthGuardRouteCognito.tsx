import React, { ComponentType } from 'react';

import { authRouteConfig } from '../../../../shared/constants/routes';
import { authCognitoHelper, CognitoAuthHelper } from '../../helpers';
import {
  RouteGuard,
  RouteGuardProps,
} from '../../../../shared/components/guards/RouteGuard';

/**
 * Auth route guard to redirect unauthenticated users to the sign in page using AWS
 * Cognito auth service.
 */
function withAuthService(
  WrappedComponent: ComponentType<RouteGuardProps>,
  auth: CognitoAuthHelper
) {
  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;
  return (props: any) => (
    <WrappedComponent
      canActivate={auth.isAuthenticated()}
      redirectPath={signinPath}
      {...props}
    />
  );
}

export const AuthGuardRouteCognito = withAuthService(RouteGuard, authCognitoHelper);
