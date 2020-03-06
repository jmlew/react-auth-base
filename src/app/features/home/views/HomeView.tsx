import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Welcome } from '../components/Welcome';
import { authBasicHelper } from '../../../core/auth/helpers';
import { authRouteConfig } from '../../../shared/constants';
import { HomeIntro } from '../components/HomeIntro';

interface HomeViewProps extends RouteComponentProps {}

export default function HomeView({}: HomeViewProps) {
  const isAuthenticated: boolean = authBasicHelper.isAuthenticated;
  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;
  return isAuthenticated ? <HomeIntro /> : <Welcome signinPath={signinPath} />;
}
