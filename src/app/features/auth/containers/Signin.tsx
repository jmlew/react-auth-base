import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { AuthSignInParams } from '../../../core/auth/models/auth.model';
import { SigninForm } from '../components';
import { authBasicHelper } from '../../../core/auth/helpers';

interface SigninProps {}

export function Signin({}: SigninProps) {
  const history = useHistory();
  const location = useLocation();
  function handleFormSubmit(values: AuthSignInParams) {
    authBasicHelper.signin(values).then(
      (userId: number) => {
        console.log('userId :', userId);
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
