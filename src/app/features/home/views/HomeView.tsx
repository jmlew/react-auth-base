import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Welcome } from '../components/Welcome';
import { authRouteConfig } from '../../../shared/constants/routes';
import { HomeIntro } from '../components/HomeIntro';
import { useAuth } from '../../../core/auth/context';

interface HomeViewProps extends RouteComponentProps {}

export default function HomeView({}: HomeViewProps) {
  const { isAuth } = useAuth();
  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;
  return isAuth ? <HomeIntro /> : <Welcome signinPath={signinPath} />;
}
