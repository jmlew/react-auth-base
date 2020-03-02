import React, { Fragment } from 'react';
import { makeStyles, Theme, Typography, Divider, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(6),
  },
  link: {
    textDecoration: 'none',
  },
}));

interface SignoutCompleteProps {
  signinPath: string;
}

export default function SignoutComplete({ signinPath }: SignoutCompleteProps) {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography align="center" variant="h4" color="primary" gutterBottom={true}>
        You are logged out
      </Typography>
      <Divider className={classes.divider} />
      <Typography align="center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis pariatur,
        libero culpa, dignissimos dolorem tenetur fugiat at itaque blanditiis fugit maxime
        voluptates inventore exercitationem. Voluptatum, sint. Quidem iusto amet
        perspiciatis!
      </Typography>
      <Box display="flex" justifyContent="center">
        <Link to={signinPath} className={classes.link}>
          <Button variant="contained" color="primary" className={classes.button}>
            Sign in again
          </Button>
        </Link>
      </Box>
    </Fragment>
  );
}
