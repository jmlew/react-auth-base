import React from 'react';
import { makeStyles, Container, Theme } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

import { IconMat } from '../../../shared/enums/icons.enum';
import { TitleAvatar } from '../../../shared/components';
import { Register } from '../containers';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

interface RegisterViewProps extends RouteComponentProps {}

export function RegisterView({}: RegisterViewProps) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <TitleAvatar title={'Register'} icon={IconMat.User} />
      <Register />
    </Container>
  );
}
