import React, { Fragment } from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({ root: {} }));

interface AccountSettingsFormProps {}

export default function AccountSettingsForm({}: AccountSettingsFormProps) {
  const classes = useStyles();
  return <Fragment>AccountSettingsForm Component</Fragment>;
}
