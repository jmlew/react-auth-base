import React from 'react';
import { makeStyles, Theme, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    marginTop: theme.spacing(2),
  },
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
        className={classes.submit}
      >
        Reset Password
      </Button>
    </form>
  );
}
