import React from 'react';
import { makeStyles, Container, Theme } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

import { IconMat } from '../../../shared/enums/icons.enum';
import { TitleAvatar } from '../../../shared/components';
import { userRouteConfig } from '../../../shared/constants/routes';
import { Signin } from '../containers';
import { SigninLinks } from '../components';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export function SigninView(props: RouteComponentProps) {
  const classes = useStyles();

  const forgotPwPath = `${userRouteConfig.forgotPw.basePath}${userRouteConfig.forgotPw.path}`;
  const registerPath = `${userRouteConfig.register.basePath}${userRouteConfig.register.path}`;

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <TitleAvatar title={'Sign in'} icon={IconMat.Lock} />
      <Signin />
      <SigninLinks forgotPwPath={forgotPwPath} registerPath={registerPath} />
    </Container>
  );
}
