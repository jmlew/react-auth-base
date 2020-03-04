import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Welcome } from '../components/Welcome';

interface HomeViewProps extends RouteComponentProps {}

export default function HomeView({}: HomeViewProps) {
  return (
    <Fragment>
      <Welcome />
    </Fragment>
  );
}
