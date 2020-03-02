import React from 'react';
import { makeStyles, Avatar, Typography, Icon, Container } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

import SigninForm from '../components/SigninForm';
import { IconMat } from '../../../shared/enums/icons.enum';
import { authRouteConfig } from '../constants/auth-route-config.constant';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
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

export default function SigninView({}: SigninViewProps) {
  const classes = useStyles();

  function handleFormSubmit() {
    console.log('Sign in form submitted');
  }

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
        forgotPwPath={`${authRouteConfig.forgotPw.basePath}${authRouteConfig.forgotPw.path}`}
        registerPath={`${authRouteConfig.register.basePath}${authRouteConfig.register.path}`}
      />
    </Container>
  );
}
