import React from 'react';
import { Typography } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

interface CardsViewProps extends RouteComponentProps {}

export function CardsView({}: CardsViewProps) {
  return (
    <Typography align="center" variant="h3" color="primary">
      Cards
    </Typography>
  );
}
