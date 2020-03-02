import React, { Fragment } from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({ root: {} }));

interface SignoutConfirmProps {}

export default function SignoutConfirm({}: SignoutConfirmProps) {
  const classes = useStyles();
  return <Fragment>SignoutConfirm Component</Fragment>;
}
