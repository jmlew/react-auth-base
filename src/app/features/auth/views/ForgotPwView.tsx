import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { makeStyles, Container, Avatar, Icon, Typography } from '@material-ui/core';

import ForgotPwForm from '../components/ForgotPwForm';
import { IconMat } from '../../../shared/enums/icons.enum';

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

interface ForgotPwViewProps extends RouteComponentProps {}

export default function ForgotPwView({}: ForgotPwViewProps) {
  const classes = useStyles();

  function handleSubmit() {
    console.log('Reset Password form submitted');
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Avatar className={classes.avatar}>
        <Icon>{IconMat.LockOpen}</Icon>
      </Avatar>
      <Typography
        component="h1"
        variant="h5"
        className={classes.title}
        gutterBottom={true}
      >
        Reset your password
      </Typography>
      <Typography variant="body2" gutterBottom={true}>
        Please enter the email associated with the account and we'll send you a reset link
      </Typography>
      <ForgotPwForm onSubmit={handleSubmit} />
    </Container>
  );
}
