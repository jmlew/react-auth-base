import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { makeStyles, Button, Checkbox, FormControlLabel, Theme } from '@material-ui/core';

import { SigninFormField } from '../enums/form-fields.enum';
import { uiThemeForm } from '../../../styles/theme/ui-theme';
import { AuthSignInParams } from '../../../core/auth/models/auth.model';
import { TextFieldInput } from '../../../shared/components/inputs';

const useStyles = makeStyles((theme: Theme) => ({
  ...uiThemeForm(theme),
}));

interface SigninFormProps {
  onSubmit: (values: AuthSignInParams) => void;
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
    validationSchema: Yup.object({
      [SigninFormField.Password]: Yup.string()
        .min(8, 'Must be 8 or more characters')
        .required('Required'),
      [SigninFormField.Email]: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    onSubmit,
  });

  return (
    <form className={classes.form} onSubmit={form.handleSubmit}>
      <TextFieldInput
        {...form.getFieldProps(SigninFormField.Email)}
        field={SigninFormField.Email}
        label={formLabels[SigninFormField.Email]}
        errors={form.errors}
        touched={form.touched}
        autoComplete={'email'}
      />
      <TextFieldInput
        {...form.getFieldProps(SigninFormField.Password)}
        field={SigninFormField.Password}
        label={formLabels[SigninFormField.Password]}
        errors={form.errors}
        touched={form.touched}
        type={'password'}
        autoComplete={'current-password'}
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
