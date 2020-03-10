import React from 'react';
import { RouteProps } from 'react-router-dom';

import { authRouteConfig } from '../../../../shared/constants/routes';
import { RouteGuard } from '../../../../shared/components/guards';
import { useAuth } from '../../context';

/**
 * Auth route guard to redirect unauthenticated users to the sign in page using a basic
 * Auth helper.
 */
export function AuthGuardRouteBasic(props: RouteProps) {
  const { isAuth } = useAuth();
  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;
  return <RouteGuard redirectPath={signinPath} canActivate={isAuth} {...props} />;
}
