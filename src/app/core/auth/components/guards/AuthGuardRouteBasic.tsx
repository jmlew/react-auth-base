import React, { ComponentType } from 'react';

import { authRouteConfig } from '../../../../shared/constants';
import { authBasicHelper } from '../../helpers';
import { AuthService } from '../../models/auth.model';
import { AuthGuardRouteProps, AuthRouteGuard } from './AuthRouteGuard';

/**
 * Auth route guard to redirect unauthenticated users to the sign in page using a basic
 * Auth helper.
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

export const AuthGuardRouteBasic = withAuthService(AuthRouteGuard, authBasicHelper);
