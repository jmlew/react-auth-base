import React from 'react';
import { makeStyles, Button, Grid, TextField, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { uiThemeForm } from '../../../styles/theme/ui-theme';

const useStyles = makeStyles((theme: Theme) => ({
  ...uiThemeForm(theme),
}));

interface RegisterFormProps {
  signinPath: string;
  onSubmit: () => void;
}

export function RegisterForm({ signinPath, onSubmit }: RegisterFormProps) {
  const classes = useStyles();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    onSubmit();
    event.preventDefault();
  }

  return (
    <form className={classes.form} noValidate={true} onSubmit={handleSubmit}>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required={true}
            fullWidth={true}
            id="firstName"
            label="First Name"
          />
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <TextField
            variant="outlined"
            required={true}
            fullWidth={true}
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
          />
        </Grid>
        <Grid item={true} xs={12}>
          <TextField
            variant="outlined"
            required={true}
            fullWidth={true}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item={true} xs={12}>
          <TextField
            variant="outlined"
            required={true}
            fullWidth={true}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth={true}
        variant="contained"
        color="primary"
        className={classes.btnSubmit}
      >
        Sign Up
      </Button>
      <Grid container={true} justify="flex-end">
        <Grid item={true}>
          <Link to={signinPath}>Already have an account? Sign in</Link>
        </Grid>
      </Grid>
    </form>
  );
}
