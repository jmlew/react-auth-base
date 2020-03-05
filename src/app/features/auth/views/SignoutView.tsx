import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { SignoutComplete } from '../components';
import { authRouteConfig } from '../../../shared/constants';

interface SignoutViewProps extends RouteComponentProps {}

export function SignoutView({}: SignoutViewProps) {
  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;
  return <SignoutComplete signinPath={signinPath} />;
}
