import React from 'react';
import { Typography } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

interface AccountsViewProps extends RouteComponentProps {}

export function AccountsView({}: AccountsViewProps) {
  return (
    <Typography align="center" variant="h3" color="primary">
      Accounts
    </Typography>
  );
}
