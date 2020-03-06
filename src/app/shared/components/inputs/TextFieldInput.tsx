import React from 'react';
import { makeStyles, OutlinedTextFieldProps, TextField, Theme } from '@material-ui/core';
import { FormikErrors, FormikTouched } from 'formik';

import { uiThemeForm } from '../../../styles/theme/ui-theme';

const useStyles = makeStyles((theme: Theme) => ({
  ...uiThemeForm(theme),
}));

interface TextFieldInputProps extends Partial<OutlinedTextFieldProps> {
  field: string;
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

export function TextFieldInput({ field, errors, touched, ...rest }: TextFieldInputProps) {
  const classes = useStyles();
  const isTouched = (): boolean => touched[field] != null;
  return (
    <TextField
      className={classes.input}
      error={isTouched() && errors[field] != null}
      helperText={isTouched() && errors[field]}
      name={field}
      variant="outlined"
      margin="normal"
      required={true}
      fullWidth={true}
      {...rest}
    />
  );
}
