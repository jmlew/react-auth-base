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

export default function AuthMenu() {
  const classes = useStyles();

  return (
    <Fragment>
      <Link to={'/auth/signin'} className={classes.link}>
        <Button color="inherit">Signin</Button>
      </Link>
      <Link to={'/auth/register'} className={classes.link}>
        <Button color="inherit">Register</Button>
      </Link>
    </Fragment>
  );
}
