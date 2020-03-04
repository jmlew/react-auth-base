import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import UserSettingsForm from '../components/UserSettingsForm';

interface UserViewProps extends RouteComponentProps {}

export default function UserView({}: UserViewProps) {
  return <UserSettingsForm />;
}
