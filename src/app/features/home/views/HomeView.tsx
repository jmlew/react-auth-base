import React, { Fragment } from 'react';
import Welcome from '../components/Welcome';
import { RouteComponentProps } from 'react-router-dom';

interface HomeViewProps extends RouteComponentProps {}

export default function HomeView({}: HomeViewProps) {
  return (
    <Fragment>
      <Welcome />
    </Fragment>
  );
}
