import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { UserSettingsForm } from '../components';

interface UserViewProps extends RouteComponentProps {}

export function UserView({}: UserViewProps) {
  return <UserSettingsForm />;
}
