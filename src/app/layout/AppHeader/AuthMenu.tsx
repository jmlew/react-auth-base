import React, { Fragment } from 'react';
import { makeStyles, Theme, createStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: 'none',
      color: theme.palette.common.white,
    },
  })
);

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
