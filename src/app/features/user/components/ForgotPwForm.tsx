import React from 'react';
import { makeStyles, Button, Theme } from '@material-ui/core';
import { useFormik } from 'formik';

import { uiThemeForm } from '../../../styles/theme/ui-theme';
import { FormField } from '../../../shared/enums/form-fields.enum';
import { PropStringMap } from '../../../shared/models/data-maps.model';
import { getValidationSchema } from '../../../shared/helpers';
import { TextFieldInput } from '../../../shared/components/inputs';
import { UserParams } from '../../../core/api/models/user-api.model';

const useStyles = makeStyles((theme: Theme) => ({
  ...uiThemeForm(theme),
}));

interface ForgotPwFormProps {
  onSubmit: (values: Partial<UserParams>) => void;
}

export function ForgotPwForm({ onSubmit }: ForgotPwFormProps) {
  const classes = useStyles();

  const initialValues: Partial<UserParams> = {
    [FormField.Email]: '',
  };
  const formLabels: PropStringMap = {
    [FormField.Email]: 'Email Address',
  };
  const form = useFormik({
    initialValues,
    validationSchema: getValidationSchema([FormField.Email]),
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
