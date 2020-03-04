import React, { Fragment } from 'react';
import { makeStyles, Theme } from '@material-ui/core';

import { uiThemeGeneral } from '../../../styles/theme/ui-theme';

const useStyles = makeStyles((theme: Theme) => ({
  ...uiThemeGeneral(theme),
}));

interface SignoutConfirmProps {}

export function SignoutConfirm({}: SignoutConfirmProps) {
  const classes = useStyles();
  return <Fragment>SignoutConfirm Component</Fragment>;
}
