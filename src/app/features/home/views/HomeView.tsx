import React, { Fragment } from 'react';
import Welcome from '../components/Welcome';
import { RouteComponentProps } from 'react-router-dom';

interface HomeViewProps extends RouteComponentProps {}

function HomeView({}: HomeViewProps) {
  return (
    <Fragment>
      <Welcome />
    </Fragment>
  );
}

export default HomeView;
