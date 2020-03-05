import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Welcome } from '../components/Welcome';
import { authHelper } from '../../../core/helpers';
import { authRouteConfig } from '../../../shared/constants';

interface HomeViewProps extends RouteComponentProps {}

export default function HomeView({}: HomeViewProps) {
  const isAuthenticated: boolean = authHelper.isAuthenticated;
  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;
  return (
    <Fragment>
      <Welcome isAuthenticated={isAuthenticated} signinPath={signinPath} />
    </Fragment>
  );
}
