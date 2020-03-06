import React, { Fragment } from 'react';
import { createStyles, makeStyles, Button, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { uiThemeGeneral } from '../../styles/theme/ui-theme';

const useStyles = makeStyles((theme: Theme) => {
  const { link } = uiThemeGeneral(theme);
  return {
    link: {
      ...link,
      color: theme.palette.common.white,
    },
  };
});

interface AuthMenuProps {
  signinPath: string;
  registerPath: string;
}

export default function AuthMenu({ signinPath, registerPath }: AuthMenuProps) {
  const classes = useStyles();

  return (
    <Fragment>
      <Link to={signinPath} className={classes.link}>
        <Button color="inherit">Signin</Button>
      </Link>
      <Link to={registerPath} className={classes.link}>
        <Button color="inherit">Register</Button>
      </Link>
    </Fragment>
  );
}
