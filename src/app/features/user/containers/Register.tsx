import React from 'react';
import { useHistory } from 'react-router-dom';

import { authRouteConfig } from '../../../shared/constants/routes';
import { RegisterForm } from '../components';
import { UserParams } from '../../../core/api/models/user-api.model';
import { ApiHelper } from '../../../core/api/helpers';
import { useAlert } from '../../../core/alerts/context';
import { AlertAlign, AlertType } from '../../../core/alerts/enums/alert.enum';

interface RegisterProps {}

export function Register({}: RegisterProps) {
  const { setAlert } = useAlert();
  const history = useHistory();
  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;

  async function handleFormSubmit(params: UserParams) {
    await ApiHelper.registerUser(params);
    setAlert({
      type: AlertType.Success,
      align: AlertAlign.TopCenter,
      message: 'You account is now registered.',
    });
    history.replace(signinPath);
  }

  return <RegisterForm onSubmit={handleFormSubmit} signinPath={signinPath} />;
}
