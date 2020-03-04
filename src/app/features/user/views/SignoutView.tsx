import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// import SignoutConfirm from '../components/SignoutConfirm';
import SignoutComplete from '../components/SignoutComplete';
import { authRouteConfig } from '../constants/auth-route-config.constant';

interface SignoutViewProps extends RouteComponentProps {}

export default function SignoutView({}: SignoutViewProps) {
  return (
    <SignoutComplete
      signinPath={`${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`}
    />
  );
}
