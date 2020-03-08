import React from 'react';
import { makeStyles, Button, Grid, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import { uiThemeForm } from '../../../styles/theme/ui-theme';
import { UserParams } from '../models/user.model';
import { FormField } from '../../../shared/enums/form-fields.enum';
import { PropStringMap } from '../../../shared/models/data-maps.model';
import { getValidationSchema } from '../../../shared/helpers';
import { TextFieldInput } from '../../../shared/components/inputs';

const useStyles = makeStyles((theme: Theme) => ({
  ...uiThemeForm(theme),
}));

interface RegisterFormProps {
  signinPath: string;
  onSubmit: (values: UserParams) => void;
}

export function RegisterForm({ signinPath, onSubmit }: RegisterFormProps) {
  const classes = useStyles();

  const initialValues: UserParams = {
    [FormField.Email]: '',
    [FormField.Password]: '',
    [FormField.FirstName]: '',
    [FormField.LastName]: '',
  };
  const formLabels: PropStringMap = {
    [FormField.Email]: 'Email Address',
    [FormField.Password]: 'Password',
    [FormField.FirstName]: 'First Name',
    [FormField.LastName]: 'Last Name',
  };
  const form = useFormik({
    initialValues,
    validationSchema: getValidationSchema([
      FormField.Password,
      FormField.Email,
      FormField.FirstName,
      FormField.LastName,
    ]),
    onSubmit,
  });

  return (
    <form className={classes.form} onSubmit={form.handleSubmit}>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12} sm={6}>
          <TextFieldInput
            {...form.getFieldProps(FormField.FirstName)}
            field={FormField.FirstName}
            label={formLabels[FormField.FirstName]}
            errors={form.errors}
            touched={form.touched}
            autoComplete={'given-name'}
          />
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <TextFieldInput
            {...form.getFieldProps(FormField.LastName)}
            field={FormField.LastName}
            label={formLabels[FormField.LastName]}
            errors={form.errors}
            touched={form.touched}
            autoComplete={'family-name'}
          />
        </Grid>
        <Grid item={true} xs={12}>
          <TextFieldInput
            {...form.getFieldProps(FormField.Email)}
            field={FormField.Email}
            label={formLabels[FormField.Email]}
            errors={form.errors}
            touched={form.touched}
            autoComplete={'email'}
          />
        </Grid>
        <Grid item={true} xs={12}>
          <TextFieldInput
            {...form.getFieldProps(FormField.Password)}
            field={FormField.Password}
            label={formLabels[FormField.Password]}
            errors={form.errors}
            touched={form.touched}
            type={'password'}
            autoComplete={'current-password'}
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
