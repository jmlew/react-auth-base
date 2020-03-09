import React from 'react';
import { useFormik } from 'formik';
import { makeStyles, Button, Checkbox, FormControlLabel, Theme } from '@material-ui/core';

import { uiThemeForm } from '../../../styles/theme/ui-theme';
import { AuthSignInParams } from '../../../core/auth/models/auth.model';
import { TextFieldInput } from '../../../shared/components/inputs';
import { FormField } from '../../../shared/enums/form-fields.enum';
import { getValidationSchema } from '../../../shared/helpers';
import { PropStringMap } from '../../../shared/models/data-maps.model';

const useStyles = makeStyles((theme: Theme) => ({
  ...uiThemeForm(theme),
}));

interface SigninFormProps {
  onSubmit: (values: AuthSignInParams) => void;
}

export function SigninForm({ onSubmit }: SigninFormProps) {
  const classes = useStyles();
  const initialValues: AuthSignInParams = {
    [FormField.Email]: '',
    [FormField.Password]: '',
    [FormField.RememberLogin]: true,
  };
  const formLabels: PropStringMap = {
    [FormField.Email]: 'Email Address',
    [FormField.Password]: 'Password',
    [FormField.RememberLogin]: 'Remember Me',
  };
  const form = useFormik({
    initialValues,
    validationSchema: getValidationSchema([FormField.Password, FormField.Email]),
    onSubmit,
  });

  return (
    <form className={classes.form} onSubmit={form.handleSubmit}>
      <TextFieldInput
        {...form.getFieldProps(FormField.Email)}
        field={FormField.Email}
        label={formLabels[FormField.Email]}
        errors={form.errors}
        touched={form.touched}
        autoComplete={'email'}
      />
      <TextFieldInput
        {...form.getFieldProps(FormField.Password)}
        field={FormField.Password}
        label={formLabels[FormField.Password]}
        errors={form.errors}
        touched={form.touched}
        type={'password'}
        autoComplete={'current-password'}
      />
      <FormControlLabel
        control={
          <Checkbox
            name={FormField.RememberLogin}
            checked={form.values[FormField.RememberLogin]}
            onChange={form.handleChange}
            color="primary"
          />
        }
        label={formLabels[FormField.RememberLogin]}
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
