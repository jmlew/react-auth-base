import React from 'react';
import { AxiosResponse } from 'axios';
import { useHistory } from 'react-router-dom';

import { authRouteConfig } from '../../../shared/constants/routes';
import { RegisterForm } from '../components';
import { UserParams } from '../../../core/api/models/user-api.model';
import { ApiHelper } from '../../../core/api/helpers';

interface RegisterProps {}

export function Register({}: RegisterProps) {
  const signinPath = `${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`;
  const history = useHistory();
  async function handleFormSubmit(params: UserParams) {
    const response: AxiosResponse<number> = await ApiHelper.registerUser(params);
    console.log('response :', response);
    history.replace(signinPath);
  }

  return <RegisterForm onSubmit={handleFormSubmit} signinPath={signinPath} />;
}
