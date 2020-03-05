import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  makeStyles,
  Container,
  Avatar,
  Icon,
  Typography,
  Theme,
} from '@material-ui/core';

import { IconMat } from '../../../shared/enums/icons.enum';
import { ForgotPwForm } from '../components';
import { TitleAvatar } from '../../../shared/components/titles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
});

interface ForgotPwViewProps extends RouteComponentProps {}

export function ForgotPwView({}: ForgotPwViewProps) {
  const classes = useStyles();

  function handleSubmit() {
    console.log('Reset Password form submitted');
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <TitleAvatar title={'Reset your password'} icon={IconMat.LockOpen} />
      <Typography variant="body2" gutterBottom={true}>
        Please enter the email associated with the account and we'll send you a reset link
      </Typography>
      <ForgotPwForm onSubmit={handleSubmit} />
    </Container>
  );
}
