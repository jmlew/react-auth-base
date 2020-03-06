import React from 'react';

import { authRouteConfig } from '../../../shared/constants';
import { RegisterForm } from '../components';
import { UserParams } from '../models/user.model';

interface RegisterProps {}

export function Register({}: RegisterProps) {
  function handleFormSubmit(values: UserParams) {
    console.log('Register form submitted: ', values);
  }

  return (
    <RegisterForm
      onSubmit={handleFormSubmit}
      signinPath={`${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`}
    />
  );
}
