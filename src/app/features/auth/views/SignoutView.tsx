import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// import SignoutConfirm from '../components/SignoutConfirm';
import { SignoutComplete } from '../components';
import { authRouteConfig } from '../../../shared/constants';

interface SignoutViewProps extends RouteComponentProps {}

export function SignoutView({}: SignoutViewProps) {
  return (
    <SignoutComplete
      signinPath={`${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`}
    />
  );
}
