import React from 'react';

import { ForgotPwForm } from '../components';
import { UserParams } from '../models/user.model';

interface ForgotPwProps {}

export function ForgotPw({}: ForgotPwProps) {
  function handleSubmit(values: Partial<UserParams>) {
    console.log('Reset Password form submitted: ', values);
  }
  return <ForgotPwForm onSubmit={handleSubmit} />;
}