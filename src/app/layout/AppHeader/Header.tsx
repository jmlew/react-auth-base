import React, { Fragment } from 'react';
import { Typography, Divider } from '@material-ui/core';

import { HeaderLogo } from './HeaderLogo';

export default function AppHeader() {
  return (
    <Fragment>
      <Typography align="center" variant="h4" color="primary" gutterBottom>
        Authenticator App
      </Typography>
      <HeaderLogo />
      <Divider />
    </Fragment>
  );
}
