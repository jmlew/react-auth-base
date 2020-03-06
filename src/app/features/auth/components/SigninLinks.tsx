import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface SigninLinksProps {
  registerPath: string;
  forgotPwPath: string;
}

export function SigninLinks({ registerPath, forgotPwPath }: SigninLinksProps) {
  return (
    <Grid container={true}>
      <Grid item={true} xs={true}>
        <Link to={forgotPwPath}>Forgot password?</Link>
      </Grid>
      <Grid item={true}>
        <Link to={registerPath}>Don't have an account? Register</Link>
      </Grid>
    </Grid>
  );
}
