import React from 'react';
import {
  makeStyles,
  Avatar,
  Typography,
  Icon,
  Container,
  Theme,
} from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

import { IconMat } from '../../../shared/enums/icons.enum';
import { authRouteConfig } from '../../../shared/constants';
import { RegisterForm } from '../components';

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

interface RegisterViewProps extends RouteComponentProps {}

export function RegisterView({}: RegisterViewProps) {
  const classes = useStyles();

  function handleFormSubmit() {
    console.log('Register form submitted');
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Avatar className={classes.avatar}>
        <Icon>{IconMat.User}</Icon>
      </Avatar>
      <Typography
        component="h1"
        variant="h5"
        className={classes.title}
        gutterBottom={true}
      >
        Register
      </Typography>
      <RegisterForm
        onSubmit={handleFormSubmit}
        signinPath={`${authRouteConfig.signin.basePath}${authRouteConfig.signin.path}`}
      />
    </Container>
  );
}
