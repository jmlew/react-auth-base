import React from 'react';
import { makeStyles, Theme, TextField, Button } from '@material-ui/core';

import { uiThemeForm } from '../../../styles/theme/ui-theme';

const useStyles = makeStyles((theme: Theme) => ({
  ...uiThemeForm(theme),
}));

interface ForgotPwFormProps {
  onSubmit: () => void;
}

export default function ForgotPwForm({ onSubmit }: ForgotPwFormProps) {
  const classes = useStyles();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    onSubmit();
    event.preventDefault();
  }

  return (
    <form className={classes.form} noValidate={true} onSubmit={handleSubmit}>
      <TextField
        className={classes.input}
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth={true}
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
      />
      <Button
        type="submit"
        fullWidth={true}
        variant="contained"
        color="primary"
        className={classes.btnSubmit}
      >
        Reset Password
      </Button>
    </form>
  );
}
