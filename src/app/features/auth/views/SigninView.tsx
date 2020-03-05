import React from 'react';
import {
  makeStyles,
  Avatar,
  Typography,
  Icon,
  Container,
  Theme,
} from '@material-ui/core';
import { RouteComponentProps, useHistory, useLocation } from 'react-router-dom';

import { SigninForm } from '../components';
import { IconMat } from '../../../shared/enums/icons.enum';
import { userRouteConfig } from '../../../shared/constants';
import { authBasicHelper } from '../../../core/helpers';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    marginBottom: theme.spacing(5),
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
      <Avatar className={classes.avatar}>
        <Icon>{IconMat.Lock}</Icon>
      </Avatar>
      <Typography
        component="h1"
        variant="h5"
        className={classes.title}
        gutterBottom={true}
      >
        Sign in
      </Typography>
      <SigninForm
        onSubmit={handleFormSubmit}
        forgotPwPath={forgotPwPath}
        registerPath={registerPath}
      />
    </Container>
  );
}
