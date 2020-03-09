import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { SignoutComplete } from '../components';
import { authRouteConfig } from '../../../shared/constants/routes';

export function SignoutView(props: RouteComponentProps) {
  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;
  return <SignoutComplete signinPath={signinPath} />;
}
