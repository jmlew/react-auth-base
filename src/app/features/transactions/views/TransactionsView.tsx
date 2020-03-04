import React from 'react';
import { Typography } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

interface TransactionsViewProps extends RouteComponentProps {}

export function TransactionsView({}: TransactionsViewProps) {
  return (
    <Typography align="center" variant="h3" color="primary">
      Transactions
    </Typography>
  );
}
