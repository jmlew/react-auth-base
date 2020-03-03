import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import AccountSettingsForm from '../components/AccountSettingsForm';

interface AccountViewProps extends RouteComponentProps {}

export default function AccountView({}: AccountViewProps) {
  return <AccountSettingsForm />;
}
