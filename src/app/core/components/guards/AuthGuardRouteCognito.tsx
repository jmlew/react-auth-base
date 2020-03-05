import React, { ComponentType } from 'react';

import { authRouteConfig } from '../../../shared/constants';
import { authBasicHelper } from '../../helpers';
import { AuthRouteGuard, AuthGuardRouteProps } from '../../../shared/components/guards';
import { AuthService } from '../../../shared/models/auth.model';

/**
 * Auth route guard to redirect unauthenticated users to the sign in page using AWS
 * Cognito auth service.
 */
function withAuthService(
  WrappedComponent: ComponentType<AuthGuardRouteProps>,
  auth: AuthService
) {
  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;
  return (props: any) => (
    <WrappedComponent
      isAuthenticated={auth.isAuthenticated}
      redirectPath={signinPath}
      {...props}
    />
  );
}

export const AuthGuardRouteCognito = withAuthService(AuthRouteGuard, authBasicHelper);
