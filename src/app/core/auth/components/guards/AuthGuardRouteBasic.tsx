import React, { ComponentType } from 'react';

import { authRouteConfig } from '../../../../shared/constants';
import { authBasicHelper } from '../../helpers';
import { AuthService } from '../../models/auth.model';

import {
  RouteGuardProps,
  RouteGuard,
} from '../../../../shared/components/guards/RouteGuard';

/**
 * Auth route guard to redirect unauthenticated users to the sign in page using a basic
 * Auth helper.
 */
function withAuthService(
  WrappedComponent: ComponentType<RouteGuardProps>,
  auth: AuthService
) {
  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;
  return (props: any) => (
    <WrappedComponent
      canActivate={auth.isAuthenticated}
      redirectPath={signinPath}
      {...props}
    />
  );
}

export const AuthGuardRouteBasic = withAuthService(RouteGuard, authBasicHelper);
