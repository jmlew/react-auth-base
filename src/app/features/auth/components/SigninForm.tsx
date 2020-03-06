import React from 'react';
import { useFormik } from 'formik';
import {
  makeStyles,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Theme,
} from '@material-ui/core';

import { uiThemeForm } from '../../../styles/theme/ui-theme';
import { AuthSignInParams } from '../../../core/auth/models/auth.model';

const useStyles = makeStyles((theme: Theme) => ({
  ...uiThemeForm(theme),
}));

interface SigninFormProps {
  onSubmit: (values: AuthSignInParams) => void;
}

enum SigninFormField {
  Email = 'email',
  Password = 'password',
}

export function SigninForm({ onSubmit }: SigninFormProps) {
  const classes = useStyles();

  const initialValues: AuthSignInParams = {
    [SigninFormField.Email]: '',
    [SigninFormField.Password]: '',
  };
  const formLabels: AuthSignInParams = {
    [SigninFormField.Email]: 'Email Address',
    [SigninFormField.Password]: 'Password',
  };

  const form = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <form className={classes.form} onSubmit={form.handleSubmit}>
      <TextField
        className={classes.input}
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth={true}
        autoComplete="email"
        label={formLabels[SigninFormField.Email]}
        id={SigninFormField.Email}
        name={SigninFormField.Email}
        value={form.values[SigninFormField.Email]}
        onChange={form.handleChange}
      />
      <TextField
        className={classes.input}
        type="password"
        autoComplete="current-password"
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth={true}
        label={formLabels[SigninFormField.Password]}
        id={SigninFormField.Password}
        name={SigninFormField.Password}
        value={form.values[SigninFormField.Password]}
        onChange={form.handleChange}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth={true}
        variant="contained"
        color="primary"
        className={classes.btnSubmit}
      >
        Sign In
      </Button>
    </form>
  );
}
