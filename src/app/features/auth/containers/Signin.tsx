import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { SigninForm } from '../components';
import { authBasicHelper } from '../../../core/auth/helpers';
import { useAuth } from '../../../core/auth/context';
import { AuthSignInParams } from '../../../core/api/models/auth-api.model';

interface SigninProps {}

export function Signin({}: SigninProps) {
  const history = useHistory();
  const location = useLocation();
  const { updateAuth } = useAuth();
  function handleFormSubmit(values: AuthSignInParams) {
    authBasicHelper.signin(values, updateAuth).then(
      (userId: number) => {
        console.log('userId :', userId);
        // updateAuth();
        const prevPath: string =
          location.state &&
          (location.state as any).from &&
          ((location.state as any).from as any).pathname;
        history.replace(prevPath || '/');
      },
      () => {
        console.log('sign in error');
      }
    );
  }
  return <SigninForm onSubmit={handleFormSubmit} />;
}
