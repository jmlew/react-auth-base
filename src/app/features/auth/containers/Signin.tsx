import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { AuthSignInParams } from '../../../core/auth/models/auth.model';
import { SigninForm } from '../components';
import { authBasicHelper } from '../../../core/auth/helpers';
import { useAuth } from '../../../core/auth/context';

interface SigninProps {}

export function Signin({}: SigninProps) {
  const history = useHistory();
  const location = useLocation();
  const { updateAuth } = useAuth();
  function handleFormSubmit(values: AuthSignInParams) {
    authBasicHelper.signin(values).then(
      (userId: number) => {
        console.log('userId :', userId);
        const prevPath: string =
          location.state &&
          (location.state as any).from &&
          ((location.state as any).from as any).pathname;
        history.replace(prevPath || '/');
        updateAuth();
      },
      () => {
        console.log('sign in error');
      }
    );
  }
  return <SigninForm onSubmit={handleFormSubmit} />;
}
