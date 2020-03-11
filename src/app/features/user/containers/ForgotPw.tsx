import React from 'react';
import { useHistory } from 'react-router-dom';

import { ForgotPwForm } from '../components';
import { UserParams } from '../../../core/api/models/user-api.model';
import { useAlert } from '../../../core/alerts/context';
import { AlertType } from '../../../core/alerts/enums/alert.enum';
import { authRouteConfig } from '../../../shared/constants';

interface ForgotPwProps {}

export function ForgotPw({}: ForgotPwProps) {
  const { setAlert } = useAlert();
  const history = useHistory();
  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;

  function handleSubmit(values: Partial<UserParams>) {
    setAlert({
      type: AlertType.Success,
      message: 'An email has been sent to reset your password.',
    });
    history.replace(signinPath);
  }
  return <ForgotPwForm onSubmit={handleSubmit} />;
}
