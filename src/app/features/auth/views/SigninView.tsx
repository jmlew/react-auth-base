import React from 'react';
import { makeStyles, Container, Theme } from '@material-ui/core';
import { RouteComponentProps, useHistory, useLocation } from 'react-router-dom';

import { SigninForm } from '../components';
import { IconMat } from '../../../shared/enums/icons.enum';
import { userRouteConfig } from '../../../shared/constants';
import { authBasicHelper } from '../../../core/helpers';
import { TitleAvatar } from '../../../shared/components/titles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

interface SigninViewProps extends RouteComponentProps {}

export function SigninView({}: SigninViewProps) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  function handleFormSubmit() {
    const prevPath: string =
      location.state &&
      (location.state as any).from &&
      ((location.state as any).from as any).pathname;
    authBasicHelper.authenticate(() => {
      history.replace(prevPath || '/');
    });
  }

  const forgotPwPath = `${userRouteConfig.forgotPw.basePath}${userRouteConfig.forgotPw.path}`;
  const registerPath = `${userRouteConfig.register.basePath}${userRouteConfig.register.path}`;

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <TitleAvatar title={'Sign in'} icon={IconMat.Lock} />
      <SigninForm
        onSubmit={handleFormSubmit}
        forgotPwPath={forgotPwPath}
        registerPath={registerPath}
      />
    </Container>
  );
}
